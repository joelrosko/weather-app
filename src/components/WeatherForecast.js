import Grid from '@material-ui/core/Grid';
import ForecastPaper from './ForecastPaper';

const WeatherForecast = ({ dates, tempratures, wind, weather, humidity, rain }) => {
    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} lg={3}>
                <ForecastPaper date={dates[0]} temprature={tempratures[0]} wind={wind[0]} weather={weather[0]} humidity={humidity[0]} rain={rain[0]} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ForecastPaper date={dates[1]} temprature={tempratures[1]} wind={wind[1]} weather={weather[1]} humidity={humidity[1]} rain={rain[1]} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ForecastPaper date={dates[2]} temprature={tempratures[2]} wind={wind[2]} weather={weather[2]} humidity={humidity[2]} rain={rain[2]} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ForecastPaper date={dates[3]} temprature={tempratures[3]} wind={wind[3]} weather={weather[3]} humidity={humidity[3]} rain={rain[3]} />
            </Grid>
        </Grid>
    )
}

export default WeatherForecast
