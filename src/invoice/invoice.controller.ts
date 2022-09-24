import { Controller, Get, Req, Post, HttpCode, HttpException, HttpStatus, Body, Delete, Param, Put } from '@nestjs/common';
import { CreateInvoiceDTO } from './invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {

    constructor(private _invoiceService: InvoiceService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createInvoice: CreateInvoiceDTO) {
        const invoice = await this._invoiceService.create(createInvoice)
        return {
            status: 201,
            message: "Success create Invoice",
            data: invoice
        }
    }

    @Get()
    async getAll() {
        const invoices = await this._invoiceService.collection()
        return {
            status: HttpStatus.OK,
            message: "Success get list of invoices",
            data: invoices
        }

    }

    @Get(":id")
    async getOne(@Param("id") id: string) {
        const invoice = await this._invoiceService.get(id)
        if (!invoice) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "NOT FOUND Data"
            }, HttpStatus.NOT_FOUND)
        }
        return {
            status: HttpStatus.OK,
            message: "success get invoice",
            data: invoice
        }
    }

    @Put(":id")
    async update(@Body() invoice: CreateInvoiceDTO, @Param("id") id: string) {
        const findInvoice = await this._invoiceService.get(id)
        if (!findInvoice) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "NOT FOUND Data"
            }, HttpStatus.NOT_FOUND)
        }
        await this._invoiceService.update(invoice, id)
        return {
            status: HttpStatus.OK,
            message: "Success get update invoice",
        }
    }

    @Delete(":id")
    async delete(@Param("id") id: string) {
        await this._invoiceService.delete(id)
        return {
            status: HttpStatus.OK,
            message: `successfull delete invoice with _id ${id}`
        }
    }
}
