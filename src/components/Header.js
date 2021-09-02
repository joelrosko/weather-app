import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const Header = ({ cityName, onSearch, openNotification, closeNotification }) => {
    const [searchField, setSearchField] = useState('');

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding: 10,
        }
    }));

    const search = (e) => {
        e.preventDefault();
        if (!searchField) {
            openNotification('No city was entered!');
            return 
        };
        onSearch(searchField);
        setSearchField('');
        closeNotification();
    };

    const classes = useStyles();

    return (
        <div className="header">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={7} md={6}>
                    <h1>{cityName}</h1>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Paper component="form" onSubmit={search} value={searchField} className={classes.root}>
                        <InputBase className={classes.input} placeholder="Search city" value={searchField} onChange={(e) => setSearchField(e.target.value)} />
                        <IconButton type="submit" className={classes.iconButton}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
