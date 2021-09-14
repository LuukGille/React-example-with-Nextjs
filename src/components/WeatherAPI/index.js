import React, { useState, useEffect } from 'react';
import styles from './weather.module.scss';
import axios from 'axios';

const WeatherAPI = ()  => {

  let [city, setCity] = useState('rotterdam');
  const [data, setData] = useState([]);
  useEffect(() => {
    const API_KEY = process.env.apiWeatherKey;

    const fetchData = async () => {
      const result = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        )    .then(result => {
            setData([result.data]);
        })    .catch(err => {
          console.log(err)
      });
    };
    fetchData();
  }, [city]);

    return (
        <>
          <div className={styles.weatherContainer}>
              <div className={styles.weatherSection}>
                  <h1 className={styles.weatherSectionTitle}>What is the temperature?</h1>
                  <p>Fill in your city to see your temperature</p>
                  <input onChange={(e) => setCity(e.target.value)} />
                  {data.map((item) => (
                    <div key={item}>
                      <div>{item.name}</div>
                      <div>{item.main.temp}</div>
                    </div>
                  ))}
              </div> 
          </div>
        </>
    )
  }

export default WeatherAPI;
