import type { NextFunction, Request, RequestHandler, Response } from 'express'

const DEFAULT_ERROR_MESSAGE = 'Could not process your request'

export class CustomError extends Error {
  statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = 500
  }
}

function CustomErrorFactory(statusCode: number) {
  return (message?: string) => {
    const error = new CustomError(message ?? DEFAULT_ERROR_MESSAGE)
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
  (controller: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      if (error instanceof CustomError) {
        const { statusCode, message } = error
        return res.status(statusCode).json({
          success: false,
          message,
        })
      }

      return res
        .status(500)
        .json({ success: false, message: DEFAULT_ERROR_MESSAGE })
    }
  }
