import ShopAccount from "../schema/shopSchema.js";

export const createShopRegistation = async data => {
  const newShopAccount = new ShopAccount(data);
  const createdShopAccount = await newShopAccount.save();
  return createdShopAccount;
};

export const findShopAccountByEmail = async email => {
  const shopAccount = await ShopAccount.findOne({ email }).lean();
  return shopAccount;
};
