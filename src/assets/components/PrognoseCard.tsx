import style from '../styles/prognosecard.module.scss';

interface PrognoseCardProps {
  tempMax: number;
  tempMin: number;
  precipitation: number;
  windspeed: number;
}

export function PrognoseCard({ tempMax, tempMin, precipitation, windspeed }: PrognoseCardProps) {
  return (
    <article className={style.progCard}>
      <p>Max temperatur: {tempMax} grader</p>
      <p>Minimum temperatur: {tempMin} grader</p>
      <p>Nedbør: {precipitation}mm</p>
      <p>Vindstyrke: {windspeed} m/s</p>
    </article>
  );
}
