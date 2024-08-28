import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/req-ext.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      res.status(401);
      res.send("NO TIENES UN JWT VALIDO");
    } else {
      req.user = isUser
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESION NO VALIDA");
  }
};

export { checkJwt };
