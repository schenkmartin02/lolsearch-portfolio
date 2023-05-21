import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() dataChange = new EventEmitter<any>();
  input: string = "Saga Seeker";

  constructor() {
  }

  search() {
    this.dataChange.emit(this.input);
  }

}
