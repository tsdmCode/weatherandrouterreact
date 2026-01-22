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

export default function classifyWeatherCode(code: number): WeatherCategory {
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
