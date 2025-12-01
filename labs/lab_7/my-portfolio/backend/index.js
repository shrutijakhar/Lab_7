// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import fs from "fs";
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// app.use(cors());
// const PORT = 5001;

// let projects = [];
// try {
//   const data = fs.readFileSync("./projects.json", "utf-8");
//   projects = JSON.parse(data);
// } catch (err) {
//   console.error("Error reading projects.json:", err);
// }

// app.get("/api/projects", (req, res) => {
//   try {
//     if (!projects.length) {
//       return res.status(404).json({ error: "No projects found" });
//     }
//     res.json(projects);
//   } catch (err) {
//     console.error("Error in /api/projects:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/api/weather", async (req, res) => {
//   try {
//     const apiKey = process.env.WEATHER_API_KEY;
//     if (!apiKey) {
//       return res.status(500).json({ error: "Weather API key missing" });
//     }

//     const city = "Halifax";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     const response = await fetch(url);
//     if (!response.ok) {
//       return res
//         .status(response.status)
//         .json({ error: "Failed to fetch weather data" });
//     }

//     const data = await response.json();
//     res.json({
//       city: data.name,
//       temp: data.main.temp,
//       humidity: data.main.humidity,
//     });
//   } catch (err) {
//     console.error("Error in /api/weather:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.use((req, res) => {
//   res.status(404).json({ error: "Endpoint not found" });
// });

// if (process.env.NODE_ENV !== "test") {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// export default app;




import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());   // NEW ➜ allows JSON POST bodies

const PORT = 5001;

// =======================
// EXISTING PROJECTS LOGIC
// =======================
let projects = [];
try {
  const data = fs.readFileSync("./projects.json", "utf-8");
  projects = JSON.parse(data);
} catch (err) {
  console.error("Error reading projects.json:", err);
}

// =======================
// NEW: MESSAGES STORAGE
// =======================
let messages = [];
try {
  const data = fs.readFileSync("./messages.json", "utf-8");
  messages = JSON.parse(data);
} catch (err) {
  console.error("Error reading messages.json:", err);
  messages = [];
}

// =======================
// NEW: SANITIZATION HELPERS
// =======================
function sanitizeText(str) {
  return str.replace(/[<>]/g, ""); // prevent HTML injection
}

function lettersOnly(str) {
  return /^[A-Za-z\s]+$/.test(str);
}

function validName(str) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(str);
}

function validEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// =======================
// NEW: POST /api/messages
// =======================
app.post("/api/messages", (req, res) => {
  try {
    const { name, email, subject, message, consent } = req.body;

    // VALIDATION
    if (!name || !validName(name)) {
      return res.status(400).json({ error: "Invalid name format." });
    }
    if (!email || !validEmail(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (!subject || !lettersOnly(subject)) {
      return res.status(400).json({ error: "Subject must contain letters only." });
    }
    if (!message) {
      return res.status(400).json({ error: "Message cannot be empty." });
    }
    if (!consent) {
      return res.status(400).json({ error: "Consent is required." });
    }

    // SANITIZATION
    const cleanMessage = sanitizeText(message);
    const cleanSubject = sanitizeText(subject);

    const newMessage = {
      id: Date.now(),
      name: sanitizeText(name),
      email,
      subject: cleanSubject,
      message: cleanMessage,
      createdAt: new Date().toISOString(),   // FIXED
    };

    messages.push(newMessage);

    // WRITE TO JSON FILE
    fs.writeFileSync("./messages.json", JSON.stringify(messages, null, 2));

    res.status(201).json({ success: true, message: "Message received." });
  } catch (err) {
    console.error("Error in POST /api/messages:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// =======================
// NEW: GET /api/messages
// =======================
app.get("/api/messages", (req, res) => {
  try {
    res.json(messages);
  } catch (err) {
    console.error("Error in GET /api/messages:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// =======================
// EXISTING WEATHER + PROJECT ROUTES
// =======================
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

// =======================
// EXISTING 404 HANDLER
// =======================
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
