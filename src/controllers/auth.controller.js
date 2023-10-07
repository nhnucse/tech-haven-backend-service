import { errorResponseHandler } from "../helper/errorResponseHandler.js";
import { validate } from "./../validator/validate.js";
const emailValidationRegex = "/^[^s@]+@[^s@]+.[^s@]+$/";
export const signup = async (req, res) => {
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
    res.created(
      {},
      "Shop registration was successful. Your information will be verified by our team."
    );
  } catch (err) {
    errorResponseHandler(err, req, res);
  }
};
