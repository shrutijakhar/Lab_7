import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
const PORT = 5001;

let projects = [];
try {
  const data = fs.readFileSync("./projects.json", "utf-8");
  projects = JSON.parse(data);
} catch (err) {
  console.error("Error reading projects.json:", err);
}

app.get("/api/projects", (req, res) => {
  try {
    if (!projects.length) {
      return res.status(404).json({ error: "No projects found" });
    }
    res.json(projects);
  } catch (err) {
    console.error("Error in /api/projects:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/weather", async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Weather API key missing" });
    }

    const city = "Halifax";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch weather data" });
    }

    const data = await response.json();
    res.json({
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
    });
  } catch (err) {
    console.error("Error in /api/weather:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
