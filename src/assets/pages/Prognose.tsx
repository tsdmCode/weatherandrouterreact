import { useState, useEffect } from 'react';
import { PrognoseCard } from '../components/PrognoseCard';
import style from '../styles/prognose.module.scss';
// {"latitude":52.511562,"longitude":13.416718,"generationtime_ms":0.20110607147216797,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":38.0,"daily_units":{"time":"iso8601","precipitation_sum":"mm","temperature_2m_max":"°C","temperature_2m_min":"°C","wind_speed_10m_max":"km/h","wind_direction_10m_dominant":"°"},"daily":{"time":["2026-01-20","2026-01-21","2026-01-22"],"precipitation_sum":[0.00,0.00,0.00],"temperature_2m_max":[1.3,2.0,0.0],"temperature_2m_min":[-3.0,-4.4,-5.8],"wind_speed_10m_max":[14.0,9.7,10.4],"wind_direction_10m_dominant":[146,123,67]}}

export function Prognose() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url =
      'https://api.open-meteo.com/v1/forecast?latitude=57.0488&longitude=9.9217&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&forecast_days=3&models=dmi_seamless';

    async function getForeCast() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }

    getForeCast();
  }, []);

  const renderedCards =
    data?.daily?.time?.map((time: string, index: number) => {
      const { temperature_2m_max, temperature_2m_min, wind_speed_10m_max, precipitation_sum } = data.daily;
      return (
        <PrognoseCard
          key={time}
          tempMax={temperature_2m_max[index]}
          tempMin={temperature_2m_min[index]}
          precipitation={precipitation_sum[index]}
          windspeed={wind_speed_10m_max[index]}
        />
      );
    }) ?? null;

  return (
    <section>
      <h2>Prognose</h2>
      <div className={style.prognose}>{renderedCards}</div>
    </section>
  );
}
