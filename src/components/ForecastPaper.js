import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import WeatherIcon from './WeatherIcon';
import { WiHumidity, WiRaindrop, WiStrongWind } from "weather-icons-react";

const ForecastPaper = ({ date, temprature, wind, weather, humidity, rain }) => {
    const useStyles = makeStyles(() => ({
        root: {
            background: '#90caf9',   // Primary main
        },
        top: {
            maxHeight: '50px'
        }
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container spacing={0} direction="column">
                <Grid item xs={12} className={classes.top}>
                    <Grid container spacing={0} justifyContent="space-between" alignItems="flex-start">
                        <Grid item xs={6}>
                            <p className="paper-secondary" style={{paddingLeft: "0.5em"}}>{date}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="paper-edge-right">
                                <WiStrongWind size={20} color='rgba(0, 0, 0, 0.54)' />
                                <p className="paper-secondary">{wind} m/s</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className="paper-center">
                        <WeatherIcon weather={weather} size={40} />
                        <h2>{temprature}°</h2>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8} justifyContent="space-between" alignItems="flex-end">
                        <Grid item xs={6}>
                            <div className="paper-edge-left">
                                <WiHumidity size={20} color='rgba(0, 0, 0, 0.54)' />
                                <p className="paper-secondary">{humidity}%</p>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="paper-edge-right">
                                <WiRaindrop size={20} color='rgba(0, 0, 0, 0.54)' />
                                <p className="paper-secondary">{rain}mm</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ForecastPaper
