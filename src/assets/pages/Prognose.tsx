import { useState, useEffect } from 'react';
import { PrognoseCard } from '../components/PrognoseCard';
import style from '../styles/prognose.module.scss';

// {"latitude":57.052193,"longitude":9.920227,"generationtime_ms":1551.5085458755493,"utc_offset_seconds":3600,"timezone":"Europe/Berlin","timezone_abbreviation":"GMT+1","elevation":10.0,"hourly_units":{"time":"iso8601","temperature_2m":"°C","precipitation":"mm","wind_speed_10m":"km/h","weather_code":"wmo code","wind_direction_10m":"°"},"hourly":{"time":["2026-01-22T00:00","2026-01-22T01:00","2026-01-22T02:00","2026-01-22T03:00","2026-01-22T04:00","2026-01-22T05:00","2026-01-22T06:00","2026-01-22T07:00","2026-01-22T08:00","2026-01-22T09:00","2026-01-22T10:00","2026-01-22T11:00","2026-01-22T12:00","2026-01-22T13:00","2026-01-22T14:00","2026-01-22T15:00","2026-01-22T16:00","2026-01-22T17:00","2026-01-22T18:00","2026-01-22T19:00","2026-01-22T20:00","2026-01-22T21:00","2026-01-22T22:00","2026-01-22T23:00","2026-01-23T00:00","2026-01-23T01:00","2026-01-23T02:00","2026-01-23T03:00","2026-01-23T04:00","2026-01-23T05:00","2026-01-23T06:00","2026-01-23T07:00","2026-01-23T08:00","2026-01-23T09:00","2026-01-23T10:00","2026-01-23T11:00","2026-01-23T12:00","2026-01-23T13:00","2026-01-23T14:00","2026-01-23T15:00","2026-01-23T16:00","2026-01-23T17:00","2026-01-23T18:00","2026-01-23T19:00","2026-01-23T20:00","2026-01-23T21:00","2026-01-23T22:00","2026-01-23T23:00","2026-01-24T00:00","2026-01-24T01:00","2026-01-24T02:00","2026-01-24T03:00","2026-01-24T04:00","2026-01-24T05:00","2026-01-24T06:00","2026-01-24T07:00","2026-01-24T08:00","2026-01-24T09:00","2026-01-24T10:00","2026-01-24T11:00","2026-01-24T12:00","2026-01-24T13:00","2026-01-24T14:00","2026-01-24T15:00","2026-01-24T16:00","2026-01-24T17:00","2026-01-24T18:00","2026-01-24T19:00","2026-01-24T20:00","2026-01-24T21:00","2026-01-24T22:00","2026-01-24T23:00"],"temperature_2m":[-0.1,-0.0,-0.4,-0.5,-0.2,0.1,0.2,0.0,0.0,0.5,0.5,0.6,0.5,0.8,0.9,1.1,0.9,0.7,0.6,0.4,0.2,0.1,0.0,-0.1,-0.1,-0.1,0.0,0.1,0.1,0.1,-0.1,-0.1,-0.1,-0.1,-0.1,-0.1,-0.1,-0.1,-0.1,-0.0,-0.1,-0.2,-0.3,-0.4,-0.6,-0.7,-0.8,-0.9,-1.0,-1.1,-1.2,-1.3,-1.3,-1.3,-1.2,-1.2,-1.0,-0.9,-0.6,-0.2,0.0,0.0,0.0,0.1,-0.1,-0.3,-0.5,-0.8,-1.0,-1.3,-1.3,-1.4],"precipitation":[0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],"wind_speed_10m":[22.7,26.3,26.3,24.8,25.2,26.3,28.8,26.3,27.0,24.5,28.8,29.5,29.5,26.3,27.0,28.1,27.7,28.8,27.7,30.2,30.2,31.3,31.7,31.3,30.6,30.6,30.2,29.5,29.2,29.5,29.9,31.3,31.7,31.3,31.7,30.2,30.6,30.6,29.2,29.9,29.5,29.5,29.9,29.9,29.9,29.5,28.1,27.4,26.6,26.3,25.9,25.6,25.2,24.5,25.9,25.9,25.9,25.2,24.8,24.1,24.5,25.2,24.8,26.3,27.7,25.9,23.8,19.6,20.0,20.6,20.5,20.5],"weather_code":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"wind_direction_10m":[76,74,77,78,77,81,85,86,87,87,86,90,96,96,92,92,89,89,91,92,91,92,93,91,89,87,88,91,89,90,90,90,93,97,98,100,98,97,97,96,94,92,92,93,94,94,94,94,94,93,91,90,88,86,86,85,84,84,86,86,90,90,88,91,89,88,86,88,92,96,98,96]}}
interface ApiResponse {
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation: number[];
    wind_speed_10m: number[];
    weather_code: number[];
    wind_direction_10m: number[];
  };
}
export function Prognose() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=57.0488&longitude=9.9217&hourly=temperature_2m,precipitation,wind_speed_10m,weather_code,wind_direction_10m&timezone=Europe%2FBerlin&forecast_days=3';

    async function getForeCast() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }

    getForeCast();
  }, []);

  const days = data?.hourly?.time?.reduce((acc: any[], time: string, index: number) => {
    const dateKey = new Date(time).toDateString();
    const dayObj = acc.find((d) => d.date === dateKey);

    const hourlyData = {
      temperature: data.hourly.temperature_2m[index],
      precipitation: data.hourly.precipitation[index],
      windspeed: data.hourly.wind_speed_10m[index],
      windDirection: data.hourly.wind_direction_10m[index],
      weatherCode: data.hourly.weather_code[index],
    };

    if (!dayObj) {
      acc.push({
        date: dateKey,
        temperatures: [hourlyData.temperature],
        precipitations: [hourlyData.precipitation],
        windspeeds: [hourlyData.windspeed],
        windDirections: [hourlyData.windDirection],
        weatherCodes: [hourlyData.weatherCode],
      });
    } else {
      dayObj.temperatures.push(hourlyData.temperature);
      dayObj.precipitations.push(hourlyData.precipitation);
      dayObj.windspeeds.push(hourlyData.windspeed);
      dayObj.windDirections.push(hourlyData.windDirection);
      dayObj.weatherCodes.push(hourlyData.weatherCode);
    }

    return acc;
  }, []);

  const renderedCards =
    days?.map((day) => (
      <PrognoseCard
        key={day.date}
        date={day.date}
        temperatures={day.temperatures}
        precipitations={day.precipitations}
        windspeeds={day.windspeeds}
        windDirections={day.windDirections}
        weatherCodes={day.weatherCodes}
      />
    )) ?? null;

  return (
    <section>
      <h2>Prognose</h2>
      <div className={style.prognose}>{renderedCards}</div>
    </section>
  );
}
