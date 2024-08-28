import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interface/req-ext.interface";

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'ESTO SOLO LO VEN PERSONAS CON SESION / JWT',
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getOrders };
