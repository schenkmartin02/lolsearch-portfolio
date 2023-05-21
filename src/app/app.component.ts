import {Component, NgModule} from '@angular/core';
import {RiotapiService} from "./riotapi.service";
import {DataSharingService} from "./services/data-sharing.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  data: any;
  accountId: any;
  puuId: any;
  id: any;
  match: any[] | undefined;
  league: any;
  loaded: boolean = false;
  input: string = "Saga Seeker";

  constructor(private api: RiotapiService, private dataSharingService: DataSharingService) {
  }

  search() {
    this.api.getSummonerData(this.input).subscribe((data) => {
      this.data = data;
      this.dataSharingService.updateChampionData(this.data);
      this.id = this.data.id;
      console.log(this.data.id)
      this.accountId = this.data.accountId;
      this.puuId = this.data.puuid;
      this.api.getLeagueData(this.id).subscribe((data) => {
        this.league = data;
      });
    });
    this.loaded = true;
  }
}
