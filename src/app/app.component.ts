import { Component } from '@angular/core';
import { LocationService, LocationDTO} from './service/location.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-locations-google-api';
  lat = 52.229676;
  lng = 21.012229;
  locations: LocationDTO[];


  constructor(private locationService: LocationService) {
  }

  onChoseLocation(event): void {
    this.locationService.getLocations(event.coords.lat, event.coords.lng)
      .subscribe(response => {
          this.locations = response;
        }
      );
  }

}
