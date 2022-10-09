import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { User, UserSchema } from "./user.schema"
import { JwtService } from '@nestjs/jwt';
import { jwtModule } from 'src/jwt.module';

@Module({
  imports: [
    jwtModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
