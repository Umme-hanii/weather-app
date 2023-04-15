import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '8a5afed4b899b17622f165fbfea7981f'
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    console.log(url)
    return this.http.get(url);
  }
}
