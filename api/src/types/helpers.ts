import type { NextFunction, Request, Response } from 'express'

export type RequestHandlerWithoutNextFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void | Response>
