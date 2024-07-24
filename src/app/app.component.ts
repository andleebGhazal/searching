import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2D Location Map';
  showMap: boolean = false;

  ngOnInit() {
    if (this.showMap) {
      this.initializeMap();
    }
  }

  toggleMap() {
    this.showMap = !this.showMap;
    if (this.showMap) {
      setTimeout(() => this.initializeMap(), 0); // Initialize map after the view updates
    }
  }

  initializeMap() {
   
    const map = L.map('map').setView([51.505, -0.09], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }
}