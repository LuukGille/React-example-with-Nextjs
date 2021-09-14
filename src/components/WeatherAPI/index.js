import React, { useState, useEffect } from 'react';
import styles from './weather.module.scss';
import axios from 'axios';

const WeatherAPI = ()  => {


  const [data, setData] = useState([]);
  useEffect(() => {
    const API_KEY = process.env.apiWeatherKey;

    const fetchData = async (props) => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=rotterdam&units=metric&appid=${API_KEY}`
      );
      setData([result.data]);
    };
    fetchData();
  }, []);

    return (
        <>
            <div className={styles.weatherContainer}>
                <div className={styles.weatherSection}>
                    <h1 className={styles.weatherSectionTitle}>What is the temperature?</h1>
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
