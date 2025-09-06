const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword", // put your MySQL password
  database: "aptimaster"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL connected");
});

// signup
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err) => {
    if (err) return res.status(500).send("Error: " + err);
    res.send("Signup successful ✅");
  });
});

// login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email=? AND password=?", [email, password], (err, results) => {
    if (err) return res.status(500).send("Error: " + err);
    if (results.length > 0) {
      res.send("Login successful ✅");
    } else {
      res.status(401).send("Invalid credentials ❌");
    }
  });
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
