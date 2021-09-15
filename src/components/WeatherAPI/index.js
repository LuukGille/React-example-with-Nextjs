import React, { useState, useEffect } from 'react';
import styles from './weather.module.scss';
import axios from 'axios';

const WeatherAPI = ()  => {

  let [city, setCity] = useState('rotterdam');
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const API_KEY = process.env.apiWeatherKey;

    const fetchData = async () => {
      const result = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        )    .then(result => {
            setData([result.data]);
            setError("");
        })    .catch(err => {
          console.log(err)
            setError("City not found");
      });
    };
    fetchData();
  }, [city]);

    return (
        <>
          <div className={styles.weatherContainer}>
              <div className={styles.weatherSection}>
                  <h1 className={styles.weatherSectionTitle}>What is the temperature?</h1>
                  <p>Fill in your city to see the temperature</p>
                  <input className={styles.weatherSectionInput} onChange={(e) => setCity(e.target.value)} />
                  <div className={styles.weatherSectionInputError}>
                    <span className={styles.weatherSectionInputErrorText}>{error}</span>
                  </div>
                  {data.map((item) => (
                    <div key={item}>
                      <div className={styles.weatherSectionText}>
                        <p className={styles.weatherSectionTextCity}>Your city is {item.name}.</p>
                        <span className={styles.weatherSectionTextTemp}>{Math.round(item.main.temp)}°</span>
                      </div>
                    </div>
                  ))}
              </div> 
          </div>
        </>
    )
  }

export default WeatherAPI;
