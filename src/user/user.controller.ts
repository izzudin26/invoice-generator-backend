import { Controller, Post, Body } from '@nestjs/common';
import { LoginDTO } from './dto/login';
import { UserService } from './user.service';
import { JwtService } from "@nestjs/jwt"

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly _jwt: JwtService
  ) { }

  @Post("/login")
  async login(@Body() logindto: LoginDTO) {
    const user = await this.userService.findOne(logindto);
    const { username } = user
    const now = Date.now()
    const payload = {username, tokenizedAt: now}
    return {
      access_token: this._jwt.sign(payload)
    }
  }
}
