
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import profileImg from "../assets/photo.png";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null); 

  


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://lab-6-10io.onrender.com/api/weather");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Failed to load weather data");
      }
    };
  
    fetchWeather();
  }, []);
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={profileImg} alt="Shruti" className="profile-photo" />

        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight-text">Shruti</span></h1>

          <p className="hero-sub">
            3rd-year Computer Science student passionate about 
            <span className="highlight-text"> AI</span>,  
            <span className="highlight-text"> full-stack development</span>, and 
            <span className="highlight-text"> problem-solving</span>.
          </p>

          <div className="skills-badges">
            <span className="badge badge-react">React</span>
            <span className="badge badge-java">Java</span>
            <span className="badge badge-spring">Spring Boot</span>
            <span className="badge badge-python">Python</span>
            <span className="badge badge-sql">SQL</span>
          </div>

          <Link to="/projects" className="btn-modern">
            View Projects
          </Link>

          
          {error ? (
            <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
          ) : weather ? (
            <div className="weather-info" style={{ marginTop: "1rem" }}>
              <h3>Weather in {weather.city}</h3>
              <p>Temperature: {weather.temp}°C</p>
              <p>Humidity: {weather.humidity}%</p>
            </div>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>
      </div>
    </div>
  );
}
