import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private championDataSubject = new BehaviorSubject<any>(null);
  public championData$ = this.championDataSubject.asObservable();

  public loading: boolean = false;

  constructor() { }

  updateChampionData(data: any) {
    this.championDataSubject.next(data);
  }

  updateLoadingData(state: boolean) {
    this.loading = state;
  }
}
