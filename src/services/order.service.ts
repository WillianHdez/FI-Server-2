import { Car } from "../interface/car.interface";
import ItemModel from "../models/item.model";

const getOrders = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export { getOrders};
