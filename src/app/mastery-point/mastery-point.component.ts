import {Component, OnChanges, OnInit} from '@angular/core';
import {RiotapiService} from "../riotapi.service";
import {DataSharingService} from "../services/data-sharing.service";

@Component({
  selector: 'app-mastery-point',
  templateUrl: './mastery-point.component.html',
  styleUrls: ['./mastery-point.component.css']
})
export class MasteryPointComponent implements OnInit {
  summonerData: any;
  masteryData: any;
  championData: any;

  constructor(private api: RiotapiService, private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.championData$.subscribe((data) => {
      this.summonerData = data;

      if (this.summonerData && this.summonerData.id) {
        this.api.getMasteryData(this.summonerData.id).subscribe((data) => {
          this.masteryData = data;
        });
      }
    });

    this.api.getChampionData().subscribe((data) => {
      this.championData = data;
    });
  }

}
