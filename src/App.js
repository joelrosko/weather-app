import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import CurrentWeatherPaper from './components/CurrentWeatherPaper';
import ForecastTable from './components/ForecastTable';
import WeatherForecast from './components/WeatherForecast';
import Notification from './components/Notification';

const serviceUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = {API_KEY};

function App() {
  const [notification, setNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState(false);
  const [city, setCity] = useState(null);
  const [currentTemprature, setCurrentTemprature] = useState('00');
  const [currentWind, setCurrentWind] = useState('00');
  const [currentHumidity, setCurrentHumidity] = useState('00');
  const [currentRain, setCurrentRain] = useState('00');
  const [currentWeather, setCurrentWeather] = useState(null);

  const [tableTimes, setTableTimes] = useState(['00', '00', '00', '00']);
  const [tableTemprature, setTableTemprature] = useState(['00', '00', '00', '00']);
  const [tableWind, setTableWind] = useState(['00', '00', '00', '00']);
  const [tableWeather, setTableWeather] = useState(['', '', '', '']);

  const [forecastDate, setForecastDate] =  useState(['00', '00', '00', '00']);
  const [forecastTemprature, setForecastTemprature] = useState(['00', '00', '00', '00']);
  const [forecastWind, setForecastWind] = useState(['00', '00', '00', '00']);
  const [forecastWeather, setForecastWeather] = useState(['00', '00', '00', '00']);
  const [forecastHumidity, setForecastHumidity] = useState(['00', '00', '00', '00']);
  const [forecastRain, setForecastRain] = useState(['00', '00', '00', '00']);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      axios.get(`${serviceUrl}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then((weather) => {
          setCurrentTemprature(Math.round(weather.data.main.temp-273));
          setCurrentWind(Math.round(weather.data.wind.speed));
          setCurrentHumidity(weather.data.main.humidity);
          setCurrentWeather(weather.data.weather[0].description);
          if (weather.data.weather.main === "Rain") {
            setCurrentRain(weather.data.rain["1h"]);
          } else {
            setCurrentRain(0);
          };
          setCity(weather.data.name);
        })
        .catch(err => {
          openNotification(err.message);
        });

      axios.get(`${serviceUrl}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then((forecast) => {
          setTableForecast(forecast.data.list);
          setPaperForecast(forecast.data.list);
        })
        .catch(err => {
          openNotification(err.message);
        });
    }, () => {
      onSearch('Göteborg');
    }, {timeout: 5000});
    // eslint-disable-next-line
  },[]);



  const setTableForecast = (data) => {
    var time = [];
    var tempratures = [];
    var wind = [];
    var weather = [];
    for (let i = 1; i < 5; i++){
      var TMPtime = data[i].dt_txt.split(" ");
      time.push(TMPtime[TMPtime.length - 1].slice(0, -3));
      tempratures.push(Math.round(data[i].main.temp - 273));
      wind.push(Math.round(data[i].wind.speed));
      weather.push(data[i].weather[0].description);
    };
    setTableTimes(time);
    setTableTemprature(tempratures);
    setTableWind(wind);
    setTableWeather(weather);
  };

  const setPaperForecast = (data) => {
    var date = [];
    var tempratures = [];
    var wind = [];
    var weather = [];
    var humidity = [];
    var rain = [];
    for (let i = 8; i < 40; i += 8) {
      var TMPdate = data[i].dt_txt.split(" ");
      date.push(TMPdate[0]);
      tempratures.push(Math.round(data[i].main.temp - 273));
      wind.push(Math.round(data[i].wind.speed));
      weather.push(data[i].weather[0].description);
      humidity.push(data[i].main.humidity);
      if (data[i].weather[0].main === "Rain") {
        rain.push(data[i].rain['3h']);
      } else {
        rain.push(0);
      };
    };
    setForecastDate(date);
    setForecastTemprature(tempratures);
    setForecastWind(wind);
    setForecastWeather(weather);
    setForecastHumidity(humidity);
    setForecastRain(rain);
    
  };

  const onSearch = (citySearch) => {
    axios.get(`${serviceUrl}weather?q=${citySearch}&appid=${apiKey}`)
        .then((weather) => {
          setCurrentTemprature(Math.round(weather.data.main.temp-273));
          setCurrentWind(Math.round(weather.data.wind.speed));
          setCurrentHumidity(weather.data.main.humidity);
          setCurrentWeather(weather.data.weather[0].description);
          if (weather.data.weather.main === "Rain") {
            setCurrentRain(weather.data.rain["1h"]);
          } else {
            setCurrentRain(0);
          };
          setCity(weather.data.name);
        })
        .catch(err => {
          openNotification(err.message);
        });

      axios.get(`${serviceUrl}forecast?q=${citySearch}&appid=${apiKey}`)
        .then((forecast) => {
          setTableForecast(forecast.data.list);
          setPaperForecast(forecast.data.list);
        })
        .catch(err => {
          openNotification(err.message);
        });
  };

  const openNotification = (msg) => {
    setNotificationMsg(msg);
    setNotification(true);
  };

  const closeNotification = () => {
    setNotification(false);
  };

  return (
    <div className="App">
      {notification && <Notification msg={notificationMsg} onClose={closeNotification} />}
      <Grid container spacing={3} direction="column">
        <Grid item xs={12}>
          <Header cityName={city} onSearch={onSearch} openNotification={openNotification} closeNotification={closeNotification} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <CurrentWeatherPaper temprature={currentTemprature} wind={currentWind} humidity={currentHumidity} rain={currentRain} weather={currentWeather} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ForecastTable times={tableTimes} temprature={tableTemprature} wind={tableWind} weather={tableWeather} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <WeatherForecast dates={forecastDate} tempratures={forecastTemprature} wind={forecastWind} weather={forecastWeather} humidity={forecastHumidity} rain={forecastRain} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
