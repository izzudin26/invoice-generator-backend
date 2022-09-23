import { Controller, Get, Req, Post, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { CreateInvoiceDTO } from './invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {

    constructor(private _invoiceService: InvoiceService) { }

    @Post()
    @HttpCode(201)
    async create(@Req() createInvoice: CreateInvoiceDTO) {
        try {
            const invoice = await this._invoiceService.create(createInvoice)
            return {
                status: 201,
                message: "Success create Invoice",
                data: invoice
            }
        } catch (e) {
            if (e instanceof Error)
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: e.message
                }, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    @Get()
    async getAll() {
        try {
            const invoices = await this._invoiceService.collection()
            return {
                status: HttpStatus.OK,
                message: "Success get list of invoices",
                data: invoices
            }
        } catch (e) {
            if (e instanceof Error)
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: e.message
                }, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}
