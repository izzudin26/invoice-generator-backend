import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from "@nestjs/jwt"


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly _jwt: JwtService
  ) { }

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-token'] as string
    if (!token) {
      throw new HttpException({
        message: "invalid or empty token"
      }, HttpStatus.UNAUTHORIZED)
    }
    const validate = this._jwt.verify(token)
    if (!validate) {
      throw new HttpException({
        message: "invalid or empty token"
      }, HttpStatus.UNAUTHORIZED)
    }
    next();
  }
}
