import Grid from '@material-ui/core/Grid';
import { WiStrongWind } from "weather-icons-react";
import WeatherIcon from './WeatherIcon';

const TableRow = ({ time, temprature, wind, weather }) => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={2}   justifyContent="space-between" alignItems="center">
                <Grid item xs={4}>
                    <p className="table-time">{time}</p>
                </Grid>
                <Grid item xs={4}>
                    <div className="table-temprature">
                        <WeatherIcon weather={weather} size={26} />
                        <p className="table-temprature">{temprature}°</p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="table-wind">
                        <WiStrongWind size={26} color='rgba(0, 0, 0, 0.54)' />
                        <p>{wind}m/s</p>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TableRow
