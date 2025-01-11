import Joi from "joi";

import { regexConstant } from "../constans/regex.constans";

export class UserValidator {
  private static name = Joi.string().trim();
  private static age = Joi.number().min(1).max(99);
  private static email = Joi.string().regex(regexConstant.EMAIL).email().trim();
  private static password = Joi.string().regex(regexConstant.PASSWORD).trim();
  private static phone = Joi.string().regex(regexConstant.PHONE).trim();

  public static create = Joi.object({
    name: this.name.required().messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "any.required": "Name is a required field",
    }),
    age: this.age.required().messages({
      "number.base": "Age must be a number",
      "number.min": "Age must be at least 1",
      "number.max": "Age cannot exceed 99",
      "any.required": "Age is a required field",
    }),
    email: this.email.required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email cannot be empty",
      "string.email": "Email must be a valid email address",
      "string.pattern.base": "Email does not match the required pattern",
      "string.required": "Email is a required field",
    }),
    password: this.password.required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password cannot be empty",
      "string.pattern.base": "Password does not match the required pattern",
      "string.required": "Password is a required field",
    }),
    phone: this.phone.optional().messages({
      "string.base": "Phone must be a string",
      "string.empty": "Phone cannot be empty",
      "string.pattern.base": "Phone does not match the required pattern",
    }),
  });
  public static update = Joi.object({
    age: this.age.optional(),
    password: this.password.optional(),
    phone: this.phone.optional(),
  });
  public static login = Joi.object({
    email: this.email.required().messages({
      "string.base": "Email must be a string",
      "string.empty": "Email cannot be empty",
      "string.email": "Email must be a valid email address",
      "string.pattern.base": "Email does not match the required pattern",
      "string.required": "Email is a required field",
    }),
    password: this.password.required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password cannot be empty",
      "string.pattern.base": "Password does not match the required pattern",
      "string.required": "Password is a required field",
    }),
  });
}
