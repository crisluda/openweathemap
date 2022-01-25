import axios from "axios";
import joi from "../joi/joiSchema.js";
import dotenv from "dotenv";
dotenv.config();
const apiKey = process.env.API_KEY;

const postWeather = async (req, res) => {
  try {
    const { city } = req.body;
    const { error } = joi(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    res.status("200").send(result.data);
  } catch (error) {
    return res
      .status(error.response.data.cod)
      .send(error.response.data.message);
    // console.log(error.response.data.cod);
  }
};
export { postWeather };
