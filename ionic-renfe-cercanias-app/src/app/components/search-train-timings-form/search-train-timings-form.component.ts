import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-train-timings-form',
  templateUrl: './search-train-timings-form.component.html',
  styleUrls: ['./search-train-timings-form.component.scss'],
})
export class SearchTrainTimingsFormComponent implements OnInit {
  stringDate: string = "";
  stringTime: string = "";
  departureStation: string = "Fuengirola";
  destinationStation: string = "Victoria Kent";

  constructor() { }

  ngOnInit() {
    let currentDate: Date = new Date();
    this.stringDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toLocaleString('es-ES', {minimumIntegerDigits: 2})}-${currentDate.getDate().toLocaleString('es-ES', { minimumIntegerDigits: 2 })}`;

    this.stringTime = `${currentDate.getHours().toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${currentDate.getMinutes().toLocaleString('es-ES', { minimumIntegerDigits: 2 })}`
  }

  switchSelectedStations() {
    // TODO
  }

  searchTimings() {
    // TODO
  }

  confirmSelectedTime() {
    // TODO
  }

  confirmSelectedDate() {
    // TODO
  }
}
