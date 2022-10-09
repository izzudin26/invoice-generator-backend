import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            secret: "applicationsecret",
            signOptions: {
                expiresIn: "7d"
            }
        }),
    ],
    exports: [JwtModule]
})
export class jwtModule { }