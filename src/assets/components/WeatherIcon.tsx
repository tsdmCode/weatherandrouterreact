import {
  WiDaySunny,
  WiDayCloudy,
  WiDayRain,
  WiDayShowers,
  WiDayThunderstorm,
  WiDaySnow,
  WiDayFog,
  WiDaySleet,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltThunderstorm,
  WiNightAltSnow,
  WiNightFog,
  WiNightAltSleet,
  WiNightShowers,
} from 'react-icons/wi';

export type WeatherCategory =
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

export interface WeatherIconProps {
  category: WeatherCategory;
  isDay: boolean;
  size: number;
}

const ICON_MAP: Record<WeatherCategory, { day: React.ComponentType<any>; night: React.ComponentType<any> }> = {
  rain: { day: WiDayRain, night: WiNightAltRain },
  snow: { day: WiDaySnow, night: WiNightAltSnow },
  thunderstorm: { day: WiDayThunderstorm, night: WiNightAltThunderstorm },
  showers: { day: WiDayShowers, night: WiNightShowers },
  sleet: { day: WiDaySleet, night: WiNightAltSleet },
  drizzle: { day: WiDayRain, night: WiNightAltRain },
  fog: { day: WiDayFog, night: WiNightFog },
  cloudy: { day: WiDayCloudy, night: WiNightAltCloudy },
  partly_cloudy: { day: WiDayCloudy, night: WiNightAltCloudy },
  clear: { day: WiDaySunny, night: WiNightClear },
  mainly_clear: { day: WiDaySunny, night: WiNightClear },
  unknown: { day: WiDaySunny, night: WiNightClear },
};

export function WeatherIcon({ category, isDay, size }: WeatherIconProps) {
  const pair = ICON_MAP[category] ?? ICON_MAP.unknown;
  const IconComp = isDay ? pair.day : pair.night;

  return <IconComp size={size} />;
}
