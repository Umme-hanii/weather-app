import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = ''
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
    if(this.city.length !== 0) {
      this.weatherService.getWeatherData(this.city).subscribe(data => {
        this.weatherData = data
        console.log(this.weatherData)
      })
    } else {
      console.log('Enter City')
    }
  }
}
