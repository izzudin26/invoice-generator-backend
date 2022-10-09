import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login';
import { User, UserDocument } from './user.schema';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private _user: Model<UserDocument>
  ) { }

  async findOne(logindto: LoginDTO): Promise<User> {
    const { username, password } = logindto
    return await this._user.findOne({ username, password }).exec()
  }

  async validate(username: string): Promise<User> {
    return await this._user.findOne({ username }).exec()
  }
}
