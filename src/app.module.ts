import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';
import { BankModule } from './bank/bank.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4rwe3go.mongodb.net/${process.env.MONGO_DATABASE}`),
    InvoiceModule,
    BankModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
