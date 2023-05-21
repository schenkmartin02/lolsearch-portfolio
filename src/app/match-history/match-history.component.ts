import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';
import { RiotapiService } from '../riotapi.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit, OnDestroy {
  summonerData: any;
  matchData: any;
  match: any[] = [];
  matchOwnData: any[] = [];
  matchKillsBlue: any[] = [];
  matchKillsRed: any[] = [];
  showDetails: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  private subscription!: Subscription;

  constructor(private api: RiotapiService, private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.subscription = this.dataSharingService.championData$.subscribe((data) => {
      this.summonerData = data;

      if (this.summonerData && this.summonerData.id) {
        this.fetchMatchData(this.summonerData.puuid);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchMatchData(puuid: string): void {
    this.api.getMatchData(puuid).subscribe((matchData) => {
      this.matchData = matchData;
      const requests = [];

      for (let i = 0; i < 10; i++) {
        requests.push(this.api.getMatchDataById(this.matchData[i]));
      }

      forkJoin(requests).subscribe((responses: any[]) => {
        this.match = responses;
        this.matchOwnData = [];

        for (let i = 0; i < responses.length; i++) {
          const data = responses[i];

          for (let j = 0; j < 10; j++) {
            if (data.info.participants[j].summonerName === this.summonerData.name) {
              this.matchOwnData.push(data.info.participants[j]);
            }
          }

          let gameKillsBlue = 0;
          let gameKillsRed = 0;

          for (let j = 0; j < 10; j++) {
            if (data.info.participants[j].teamId === 100) {
              gameKillsBlue += data.info.participants[j].kills;
            } else if (data.info.participants[j].teamId === 200) {
              gameKillsRed += data.info.participants[j].kills;
            }
          }

          this.matchKillsBlue.push(gameKillsBlue);
          this.matchKillsRed.push(gameKillsRed);
          console.log(this.matchOwnData);
        }
      });
    });
  }
}
