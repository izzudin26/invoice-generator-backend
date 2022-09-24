import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { Bank, BankSchema } from './bank.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bank.name, schema: BankSchema }
    ])
  ],
  controllers: [BankController],
  providers: [BankService]
})
export class BankModule { }
