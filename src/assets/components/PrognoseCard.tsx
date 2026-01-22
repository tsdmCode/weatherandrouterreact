import style from '../styles/prognosecard.module.scss';
import { WiStrongWind, WiThermometer, WiRain } from 'react-icons/wi';
import classifyWeatherCode from '../utils/classifyWeatherCode.js';
import { WeatherIcon } from './WeatherIcon';
import { FaLongArrowAltUp } from 'react-icons/fa';

interface PrognoseCardProps {
  temperatures: number[];
  precipitations: number[];
  windspeeds: number[];
  windDirections: number[];
  date: string;
  weatherCodes: number[];
}

export function PrognoseCard({
  temperatures,
  precipitations,
  windspeeds,
  windDirections,
  weatherCodes,
  date,
}: PrognoseCardProps) {
  const size = 36;

  const renderedValues = temperatures.map((temp, index) => (
    <div key={index}>
      <p>{`${index.toString().padStart(2, '0')}:00`}</p>
      <WeatherIcon category={classifyWeatherCode(weatherCodes[index])} size={size} isDay={index < 18 ? true : false} />
      <WiThermometer size={size} />
      <p>{temp}°C</p>
      <WiRain size={size} />
      <p>{precipitations[index]}mm</p>
      <WiStrongWind size={size} />
      <p>{(windspeeds[index] / 3.6).toFixed(2)} m/s</p>
      <FaLongArrowAltUp style={{ rotate: `${windDirections[index]}deg` }} size={size} />
    </div>
  ));

  return (
    <article className={style.progCard}>
      <p>{date} </p>
      <div className={style.weatherWindow}>{renderedValues}</div>
    </article>
  );
}
