import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TableRow from './TableRow';

const ForecastTable = ({ times, temprature, wind, weather }) => {
    const useStyles = makeStyles(() => ({
        root: {
            background: '#90caf9',   // Primary main
        },
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Grid container spacing={0} direction="column">
                <TableRow time={times[0]} temprature={temprature[0]} wind={wind[0]} weather={weather[0]} />
                <Divider />
                <TableRow time={times[1]} temprature={temprature[1]} wind={wind[1]} weather={weather[1]} />
                <Divider />
                <TableRow time={times[2]} temprature={temprature[2]} wind={wind[2]} weather={weather[2]} />
                <Divider />
                <TableRow time={times[3]} temprature={temprature[3]} wind={wind[3]} weather={weather[3]} />
            </Grid>
        </Paper>
    )
}

export default ForecastTable
