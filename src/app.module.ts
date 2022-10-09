import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { BankModule } from './bank/bank.module';
import { UserModule } from './user/user.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { InvoiceController } from './invoice/invoice.controller';
import { jwtModule } from './jwt.module';
import { BankController } from './bank/bank.controller';


@Module({
  imports: [
    jwtModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4rwe3go.mongodb.net/${process.env.MONGO_DATABASE}`),
    InvoiceModule,
    BankModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({path: "invoice", method: RequestMethod.GET}, {path: "bank", method: RequestMethod.GET})
      .forRoutes(InvoiceController, BankController)
  }
}
