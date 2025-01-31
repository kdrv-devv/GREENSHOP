interface Condition {
    text: string;
    icon: string;
    code: number;
  }
  
  interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    condition: Condition;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
  }
  
  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
    localtime_epoch: number;
  }
  
  export interface WeatherData {
    location: Location;
    current: CurrentWeather;
  }
  