import React from 'react';
import City from './City';

const cities = [
  { name: "Lisbon", temp: "21°C", icon: "wi-day-sunny", bgColor: "#3399CC" },
  { name: "Paris", temp: "11°C", icon: "wi-night-sleet", bgColor: "#33CCCC" },
  { name: "Belgrade", temp: "15°C", icon: "wi-day-cloudy", bgColor: "#996699" },
  { name: "Venice", temp: "21°C", icon: "wi-day-cloudy-high", bgColor: "#C24747" },
  { name: "Tel-Aviv", temp: "32°C", icon: "wi-hot", bgColor: "#E2674A" },
  { name: "Cairo", temp: "21°C", icon: "wi-day-sunny", bgColor: "#FFCC66" },
  { name: "New York", temp: "17°C", icon: "wi-day-sleet-storm", bgColor: "#99CC99" },
  { name: "New Delhi", temp: "17°C", icon: "wi-rain-wind", bgColor: "#669999" },
  { name: "San Francisco", temp: "15°C", icon: "wi-day-sunny-overcast", bgColor: "#CC6699" },
  { name: "Tokyo", temp: "8°C", icon: "wi-night-clear", bgColor: "#339966" },
  { name: "Sydney", temp: "25°C", icon: "wi-night-partly-cloudy", bgColor: "#666699" }
];

function CityList() {
  return (
    <div className="container">
      <ul className="container-ul">
        {cities.map((city, index) => (
          <City key={index} name={city.name} temp={city.temp} icon={city.icon} bgColor={city.bgColor} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
