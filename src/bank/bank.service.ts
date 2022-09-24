import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { Model, Types } from "mongoose"
import { Bank, BankDocument } from "./bank.schema"
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';


@Injectable()
export class BankService {
  constructor(@InjectModel(Bank.name) private _bank: Model<BankDocument>) { }

  async create(createBankDto: CreateBankDto): Promise<Bank> {
    const bank = new this._bank(createBankDto)
    return await bank.save()
  }

  async findAll(): Promise<Bank[]> {
    return await this._bank.find().sort({
      timestamp: -1
    }).exec()
  }

  async findOne(id: string): Promise<Bank> {
    const _id = new Types.ObjectId(id)
    return await this._bank.findOne({_id}).exec()
  }

  async update(id: string, updateBankDto: UpdateBankDto): Promise<void> {
    const _id = new Types.ObjectId(id)
    await this._bank.updateOne({_id}, updateBankDto)
  }

  async remove(id: string) {
    const _id = new Types.ObjectId(id)
    await this._bank.deleteOne({_id}).exec()
  }
}
