import express from "express";
import { postWeather } from "../controller/getWeatherController.js";
const router = express();

router.get("/weather", (req, res) => {
  res.json({ status: "ok", massage: "ok" });
});

router.use(express.json({ extended: true }));

router.post("/weather", postWeather);
export default router;
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
