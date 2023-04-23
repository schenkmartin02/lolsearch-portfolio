import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RiotapiService} from "./riotapi.service";
import {delay, forkJoin} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-lol';
  data: any;
  matchData: any;
  accountId: any;
  puuId: any;
  id: any;
  match: any[] | undefined;
  league: any;
  loaded: boolean = false;

  constructor(private api: RiotapiService) {
  }

  dataChanged(data: any) {
    this.api.getSummonerData(data).subscribe((data) => {
      this.data = data;
      this.id = this.data.id;
      this.accountId = this.data.accountId;
      this.puuId = this.data.puuid;
      this.api.getLeagueData(this.id).subscribe((data) => {
        this.league = data;
      })
      this.api.getMatchData(this.puuId).subscribe((data) => {
        this.matchData = data;
        const requests = this.matchData.map((data: string) => this.api.getMatchDataById(data));
        forkJoin(requests).subscribe(data => {
          // @ts-ignore
          this.match = data.map(d => d.info);
          console.log(this.match)
        });
      });
    });
    this.loaded = true;
  }
}
