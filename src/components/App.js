import { useState } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const API_KEY = '833ca2fbe9b42d70e9ba7f77a960393f';

function App() {

  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [temp, setTemp] = useState('');
  const [pressure, setPressure] = useState('');
  const [wind, setWind] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log('wysłano formularz');
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        setError(false)
        setDate(time)
        setSunrise(data.sys.sunrise)
        setSunset(data.sys.sunset)
        setTemp(data.main.temp)
        setPressure(data.main.pressure + "hPa")
        setWind(data.wind.speed)
        setCity(value)
      })
      .catch(err => {
        setError(true)
        setCity(value)
      })

  }

  return (
    <div className="App">
      <Form value={value} change={handleInputChange} submit={handleCitySubmit} />
      <Result
        value={value}
        date={date}
        city={city}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        pressure={pressure}
        wind={wind}
        error={error}
      />
    </div>
  );
}

export default App;
