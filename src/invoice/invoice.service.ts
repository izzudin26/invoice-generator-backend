import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose"
import { Model, Types} from 'mongoose';
import { CreateInvoiceDTO } from './invoice.dto';
import { Invoice, InvoiceDocument } from "./invoice.schema"

@Injectable()
export class InvoiceService {
    constructor(@InjectModel(Invoice.name) private _invoice: Model<InvoiceDocument>){}

    async create(invoiceDTO: CreateInvoiceDTO): Promise<Invoice> {
        const createInvoice = new this._invoice(invoiceDTO)
        return createInvoice.save()
    }

    async get(id: string): Promise<Invoice> {
        const objId = new Types.ObjectId(id)
        const invoice = this._invoice.findOne({_id: objId})
        return invoice.exec()
    }

    async collection(): Promise<Invoice[]> {
        return await this._invoice.find().sort({
            timestamp: -1
        }).exec()
    }

    async update(newInvoice: CreateInvoiceDTO, id: string): Promise<void> {
        const _id = new Types.ObjectId(id)
        await this._invoice.updateOne({_id}, newInvoice).exec()
    }

    async delete(id: string): Promise<void> {
        const _id = new Types.ObjectId(id)
        await this._invoice.deleteOne({_id}).exec()
    }
}
