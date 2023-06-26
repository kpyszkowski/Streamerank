import type { RequestHandlerWithoutNextFunctionType } from '@/types'
import type { NextFunction, Request, Response } from 'express'
import { MongooseError } from 'mongoose'

const DEFAULT_STATUS_CODE = 500
const DEFAULT_MESSAGE = 'Could not process your request.'

const ERROR_NAMES = {
  500: 'ServerError',
  400: 'BadRequestError',
  401: 'UnauthorizedError',
  403: 'ForbiddenError',
  404: 'NotFoundError',
}

type ErrorStatusCodeType = keyof typeof ERROR_NAMES

export class CustomError extends Error {
  statusCode: number
  constructor(statusCode: ErrorStatusCodeType, message: string) {
    super(message)
    this.statusCode = statusCode
    this.name = ERROR_NAMES[statusCode]
  }
}

function CustomErrorFactory(statusCode: number) {
  return (message?: string) => {
    const error = new CustomError(
      DEFAULT_STATUS_CODE,
      message ?? DEFAULT_MESSAGE,
    )
    error.statusCode = statusCode
    return error
  }
}

export const ServerError = CustomErrorFactory(500)
export const BadRequestError = CustomErrorFactory(400)
export const UnauthorizedError = CustomErrorFactory(401)
export const ForbiddenError = CustomErrorFactory(403)
export const NotFoundError = CustomErrorFactory(404)

export const handleErrors =
  (controller: RequestHandlerWithoutNextFunctionType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      console.log(error)

      if (error instanceof MongooseError) {
        const { message } = error
        return res.status(DEFAULT_STATUS_CODE).json({
          success: false,
          message,
        })
      }

      if (error instanceof CustomError) {
        const { statusCode, message } = error
        return res.status(statusCode).json({
          success: false,
          message,
        })
      }

      return res
        .status(DEFAULT_STATUS_CODE)
        .json({ success: false, message: DEFAULT_MESSAGE })
    }
  }
