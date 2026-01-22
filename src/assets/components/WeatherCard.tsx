import { WeatherIcon } from './WeatherIcon';
import style from '../styles/weathercard.module.scss';
import classifyWeatherCode from '../utils/classifyWeatherCode.js';

interface WeatherCardProps {
  temperature: number;
  windspeed: number;
  weathercode: number;
  is_day: number;
  humidity: number;
  cloudCover: number;
  visibility: number;
  precipitation: number;
}

export function WeatherCard({
  temperature,
  windspeed,
  weathercode,
  is_day,
  humidity,
  cloudCover,
  visibility,
  precipitation,
}: WeatherCardProps) {
  const date = new Date();
  const hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const today = date.getDate();
  const dayName = new Intl.DateTimeFormat('da-DK', { weekday: 'long' }).format(date);

  const category = classifyWeatherCode(weathercode);
  const isDay = is_day === 1;

  return (
    <article className={style.weatherCard}>
      <h2>
        Vejr for {dayName} den {today}. klokken {hour}:{minutes}
      </h2>
      <div>
        <WeatherIcon category={category} isDay={isDay} size={36} />
        <p>Temperatur: {temperature} celsius</p>
        <p>Vindstyrke: {(windspeed / 3.6).toFixed(2)}m/s</p>
        <p>Fugtighed: {humidity}%</p>
        <p>Skydække: {cloudCover}%</p>
        <p>Sightbarhed: {visibility}m</p>
        <p>Nedbør: {precipitation}mm</p>
      </div>
    </article>
  );
}
