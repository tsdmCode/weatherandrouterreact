import { useEffect, useState } from 'react';
import { WeatherCard } from '../components/WeatherCard';
import style from '../styles/home.module.scss';
//{"latitude":57.052193,"longitude":9.920227,"generationtime_ms":0.0699758529663086,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":10.0,"current_weather_units":{"time":"iso8601","interval":"seconds","temperature":"°C","windspeed":"km/h","winddirection":"°","is_day":"","weathercode":"wmo code"},"current_weather":{"time":"2026-01-20T08:15","interval":900,"temperature":-1.4,"windspeed":2.5,"winddirection":139,"is_day":1,"weathercode":2}}
//https://api.open-meteo.com/v1/forecast?latitude=57.0488&longitude=9.9217&current_weather=true&hourly=apparent_temperature,relativehumidity_2m,pressure_msl,cloudcover,visibility&timezone=Europe/Copenhagen

type Hourly = {
  time: string[];
  relativehumidity_2m: number[];
  cloudcover: number[];
  visibility: number[];
  precipitation: number[];
};

type CurrentWeather = {
  time: string;
  temperature: number;
  windspeed: number;
  weathercode: number;
  is_day: number;
};

type WeatherApiResponse = {
  current_weather: CurrentWeather;
  hourly: Hourly;
};

export function Home() {
  const [data, setData] = useState<WeatherApiResponse | null>(null);

  useEffect(() => {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=57.0488&longitude=9.9217&current_weather=true&hourly=apparent_temperature,relativehumidity_2m,pressure_msl,cloudcover,visibility,precipitation&timezone=Europe/Copenhagen';

    async function getCurrentWeather() {
      const res = await fetch(url);
      const json = (await res.json()) as WeatherApiResponse;
      console.log(json);
      setData(json);
    }

    getCurrentWeather();
  }, []);

  if (!data) {
    return <h2>Kunne ikke finde vejrdata</h2>;
  }

  const { current_weather, hourly } = data;

  // 🔑 Find the matching hourly index
  const nowTime = new Date(current_weather.time).getTime();

  const nowIndex = hourly.time.findIndex(
    (t, i) =>
      new Date(t).getTime() <= nowTime &&
      (i === hourly.time.length - 1 || new Date(hourly.time[i + 1]).getTime() > nowTime),
  );

  if (nowIndex === -1) {
    return <h2>Kunne ikke finde relevant time i time-serien</h2>;
  }

  const currentWeather = {
    temperature: current_weather.temperature,
    windspeed: current_weather.windspeed,
    weathercode: current_weather.weathercode,
    is_day: current_weather.is_day,
    humidity: hourly.relativehumidity_2m[nowIndex],
    cloudCover: hourly.cloudcover[nowIndex],
    visibility: hourly.visibility[nowIndex],
    precipitation: hourly.precipitation[nowIndex],
  };
  return (
    <section className={style.home}>
      <h2>Vejret i Aalborg er således:</h2>
      <WeatherCard
        temperature={currentWeather.temperature}
        windspeed={currentWeather.windspeed}
        weathercode={currentWeather.weathercode}
        is_day={currentWeather.is_day}
        humidity={currentWeather.humidity}
        cloudCover={currentWeather.cloudCover}
        visibility={currentWeather.visibility}
        precipitation={currentWeather.precipitation}
      />
    </section>
  );
}
