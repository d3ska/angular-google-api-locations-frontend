import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {url} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
  }

  getLocations(lat: number, lon: number): Observable<LocationDTO[]> {
    return this.httpClient.get<LocationDTO[]>(url.myEndPoint + '/' + lat + '/' + lon);
  }
}

export class LocationDTO {
  lat: number;
  lng: number;
  name: string;
}

