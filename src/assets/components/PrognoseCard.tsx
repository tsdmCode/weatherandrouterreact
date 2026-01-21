import style from '../styles/prognosecard.module.scss';

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
      <p>Max temperatur: {tempMax} grader</p>
      <p>Minimum temperatur: {tempMin} grader</p>
      <p>Nedbør: {precipitation}mm</p>
      <p>Vindstyrke: {(windspeed / 3.6).toFixed(2)} m/s</p>
    </article>
  );
}
