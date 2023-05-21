import {Injectable, OnChanges, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RiotapiService{
  api: string = 'RGAPI-cca0f81c-829f-4264-b60e-ed939f7d547c';
  summonerName: string = "";

  constructor(private http: HttpClient) {
  }

  getSummonerData(summonerName: string) {
    return this.http.get('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.api);
  }

  getMatchData(puuId: string) {
    return this.http.get('https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuId + '/ids?start=0&count=10&api_key=' + this.api);
  }

  getMatchDataById(matchId: string) {
    return this.http.get('https://europe.api.riotgames.com/lol/match/v5/matches/' + matchId + '?api_key=' + this.api);
  }

  getLeagueData(summonerId: string) {
    return this.http.get('https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerId + '?api_key=' + this.api);
  }

  getMasteryData(summonerId: string) {
    return this.http.get('https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + summonerId + '?api_key=' + this.api)
  }

  setSummonerName(summonerName: string) {
    this.summonerName = summonerName;
  }

  getSummonerName() {
    return this.summonerName;
  }

  getChampionData() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json');
  }
}
