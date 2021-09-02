import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiRain, WiThunderstorm, WiSnow, WiFog } from "weather-icons-react";

const WeatherIcon = ({ weather, size }) => {
    if (weather ==="clear sky") {
        return (
            <WiDaySunny size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else if (weather ==="few clouds") {
        return (
            <WiDaySunnyOvercast size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else if (weather ==="shower rain" || weather ==="rain" || weather ==="light rain") {
        return (
            <WiRain size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else if (weather ==="thunderstorm") {
        return (
            <WiThunderstorm size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else if (weather ==="snow") {
        return (
            <WiSnow size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else if (weather ==="mist") {
        return (
            <WiFog size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    } else {
        return (
            <WiCloud size={size} color='rgba(0, 0, 0, 0.87)' />
        )
    }
}

export default WeatherIcon
