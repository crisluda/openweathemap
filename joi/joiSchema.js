import Joi from "joi";
const joi = (city) => {
  try {
    const joiSchema = Joi.object({
      city: Joi.string().min(3).max(128).required(),
    });
    return joiSchema.validate(city);
  } catch (error) {
    console.log(error);
  }
};
export default joi;
