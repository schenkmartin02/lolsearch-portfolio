import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RankTypePipe} from './pipes/rank-type.pipe';
import {RankTextPipe} from './pipes/rank-text.pipe';
import {RoleTypePipe} from './pipes/role-type.pipe';
import {GameTypePipe} from './pipes/game-type.pipe';
import {GameTimePipe} from './pipes/game-time.pipe';
import {GameStatusPipe} from './pipes/game-status.pipe';
import {ChampionIconFixPipe} from './pipes/champion-icon-fix.pipe';
import {ItemNotFoundPipe} from './pipes/item-not-found.pipe';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {MasteryPointComponent} from './mastery-point/mastery-point.component';
import {MatchHistoryComponent} from './match-history/match-history.component';
import {ClashComponent} from './clash/clash.component';
import {HomeComponent} from "./home/home.component";
import { ChampionIdToNamePipe } from './pipes/champion-id-to-name.pipe';
import { ChampionIdToKeyPipe } from './pipes/champion-id-to-key.pipe';
import { ChampionIdToRolePipe } from './pipes/champion-id-to-role.pipe';
import { RoundingIntPipe } from './pipes/rounding-int.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { TextMaxLenghtPipe } from './pipes/text-max-lenght.pipe';
import { TimeToDayPipe } from './pipes/time-to-day.pipe';
import { SummonerSpellIdToNamePipe } from './pipes/summoner-spell-id-to-name.pipe';
import { TeamBluePipe } from './pipes/team-blue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RankTypePipe,
    RankTextPipe,
    RoleTypePipe,
    GameTypePipe,
    GameTimePipe,
    GameStatusPipe,
    ChampionIconFixPipe,
    ItemNotFoundPipe,
    MasteryPointComponent,
    MatchHistoryComponent,
    ClashComponent,
    HomeComponent,
    ChampionIdToNamePipe,
    ChampionIdToKeyPipe,
    ChampionIdToRolePipe,
    RoundingIntPipe,
    TextMaxLenghtPipe,
    TimeToDayPipe,
    SummonerSpellIdToNamePipe,
    TeamBluePipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterLink,
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
