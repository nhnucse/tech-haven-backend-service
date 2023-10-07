import { errorResponseHandler } from "../helper/errorResponseHandler.js";
import {
  createShopRegistation,
  findShopAccountByEmail
} from "../models/ShopAuth.js";
import { validate } from "./../validator/validate.js";
import bcrypt from "bcrypt";
import { statusCodes } from "./../helper/statusCodes.js";

const emailValidationRegex = "/^[^s@]+@[^s@]+.[^s@]+$/";

export const shopRgistration = async (req, res) => {
  try {
    const { shopName, ownerName, address, email, password, ownerNID } =
      req.body;
    validate(
      { shopName, ownerName, address, email, password, ownerNID },
      {
        shopName: "required",
        ownerName: "required",
        address: "required",
        email: `required|regex:${emailValidationRegex}`,
        password: "required",
        ownerNID: "required"
      }
    );
    const isEmailExist = await findShopAccountByEmail(email);
    if (isEmailExist) {
      throw Object.assign(new Error(), {
        status: statusCodes.CONFLICT,
        error: {
          code: 40005
        }
      });
    }
    const hashPassword = await bcrypt.hash(password, 9);
    const newshop = await createShopRegistation({
      shopName,
      ownerName,
      address,
      email,
      password: hashPassword,
      ownerNID
    });
    res.created(
      newshop,
      "Shop registration was successful. Your information will be verified by our team."
    );
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
