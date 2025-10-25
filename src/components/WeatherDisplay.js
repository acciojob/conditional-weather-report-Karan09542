import React from 'react'

const WeatherDisplay = ({weatherState}) => {
    const {temperature, conditions} = weatherState
  return (
    <div>
        <p>Temperature: <span style={{color: temperature > 20 ? "red" : 'blue'}}>{weatherState.temperature}</span>&deg;C</p>
        <p>Conditions: {conditions}</p>
    </div>
  )
}

export default WeatherDisplay