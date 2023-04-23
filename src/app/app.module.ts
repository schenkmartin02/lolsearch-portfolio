import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RankTypePipe } from './pipes/rank-type.pipe';
import { RankTextPipe } from './pipes/rank-text.pipe';
import { RoleTypePipe } from './pipes/role-type.pipe';
import { GameTypePipe } from './pipes/game-type.pipe';
import { GameTimePipe } from './pipes/game-time.pipe';
import { GameStatusPipe } from './pipes/game-status.pipe';
import { ChampionIconFixPipe } from './pipes/champion-icon-fix.pipe';

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
    ChampionIconFixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
