import { WeatherIcon } from './WeatherIcon';
import style from '../styles/weathercard.module.scss';

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
type WeatherCategory =
  | 'clear'
  | 'rain'
  | 'snow'
  | 'partly_cloudy'
  | 'mainly_clear'
  | 'cloudy'
  | 'fog'
  | 'drizzle'
  | 'sleet'
  | 'showers'
  | 'thunderstorm'
  | 'unknown';

function classifyWeatherCode(code: number): WeatherCategory {
  switch (code) {
    case 0:
      return 'clear';
    case 1:
      return 'mainly_clear';
    case 2:
      return 'partly_cloudy';
    case 3:
      return 'cloudy';
    case 45:
    case 48:
      return 'fog';
    case 51:
    case 53:
    case 55:
      return 'drizzle';
    case 56:
    case 57:
    case 66:
    case 67:
      return 'sleet';
    case 61:
    case 63:
    case 65:
      return 'rain';
    case 80:
    case 81:
    case 82:
      return 'showers';
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return 'snow';
    case 95:
    case 96:
    case 99:
      return 'thunderstorm';
    default:
      return 'unknown';
  }
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
        <p>Vindstyrke: {windspeed}m/s</p>
        <p>Fugtighed: {humidity}%</p>
        <p>Skydække: {cloudCover}%</p>
        <p>Sightbarhed: {visibility}m</p>
        <p>Nedbør: {precipitation}mm</p>
      </div>
    </article>
  );
}
