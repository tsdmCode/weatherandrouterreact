import style from '../styles/prognosecard.module.scss';
import { WiStrongWind, WiThermometer, WiRain } from 'react-icons/wi';

interface PrognoseCardProps {
  tempMax: number;
  tempMin: number;
  precipitation: number;
  windspeed: number;
  date: string;
}

export function PrognoseCard({ tempMax, tempMin, precipitation, windspeed, date }: PrognoseCardProps) {
  return (
    <article className={style.progCard}>
      <p>{date} </p>
      <p>
        <WiThermometer /> Temperatur: {tempMin} til {tempMax}°C
      </p>
      <p>
        <WiRain /> Nedbør: {precipitation}mm
      </p>
      <p>
        <WiStrongWind /> Vindstyrke: {(windspeed / 3.6).toFixed(2)} m/s
      </p>
    </article>
  );
}
