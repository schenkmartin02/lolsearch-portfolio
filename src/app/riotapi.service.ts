import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RiotapiService {
  api: string = 'RGAPI-7695ff9d-8f12-4cd4-aab1-681ea1db9a21';

  constructor(private http:HttpClient) { }

  getSummonerData(summonerName: string) {
    return this.http.get('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.api);
  }

  getMatchData(puuId: string) {
    return this.http.get('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/'+ puuId +'/ids?start=0&count=10&api_key=' + this.api);
  }

  getMatchDataById(matchId: string) {
    return this.http.get('https://europe.api.riotgames.com/lol/match/v5/matches/'+ matchId +'?api_key=' + this.api);
  }

  getLeagueData(summonerId: string) {
    return this.http.get('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerId + '?api_key=' + this.api);
  }
}
