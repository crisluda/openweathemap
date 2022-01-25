import express from "express";
import weather from "./routes/getWeather.js";
const app = express();
const port = process.env.PORT || 700;

app.use("/api/v1", weather);
app.listen(port || 700, () => {
  console.log(`app is runing on http://127.0.0.1:${port}`);
});
