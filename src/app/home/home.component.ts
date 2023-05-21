import { Component } from '@angular/core';
import {RiotapiService} from "../riotapi.service";
import {forkJoin} from "rxjs";
import {GameTimePipe} from "../pipes/game-time.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
}
