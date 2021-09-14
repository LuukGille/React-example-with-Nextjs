import React, { useState, useEffect } from 'react';
import styles from './weather.module.scss';
import axios from 'axios';

const WeatherAPI = ()  => {

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (props) => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=rotterdam&units=metric&appid=6efe7a3954e41d023b4a18ddfd64c421`,
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
