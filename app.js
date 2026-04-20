const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    console.log("App is running...");
    res.json({ status: "App is running on port 3000" });
});

app.get("/health", (req, res) => {
    console.log("Health check hit");
    res.json({ status: "health is ok" });
});

app.get("/hello", (req, res) => {
    console.log("Hello endpoint hit");
    console.log(`IP : ${req.headers["x-forwarded-for"] || req.socket.remoteAddress}`);
    res.json({ message: "Hello, Sir!" });
});

app.listen(PORT, () => {
    console.log(`------- Server running on port ${PORT} ---------`);
});
