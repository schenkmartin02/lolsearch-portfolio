import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MasteryPointComponent} from "./mastery-point/mastery-point.component";
import {MatchHistoryComponent} from "./match-history/match-history.component";
import {ClashComponent} from "./clash/clash.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mastery',
    component: MasteryPointComponent
  },
  {
    path: 'match',
    component: MatchHistoryComponent
  },
  {
    path: 'clash',
    component: ClashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
