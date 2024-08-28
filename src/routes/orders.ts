import { Router } from "express";
import { getOrders } from "../controllers/order.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get('/', checkJwt, getOrders)

export { router };
