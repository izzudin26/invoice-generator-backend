import { InvoiceDetail } from "./invoice.schema"
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDTO {
    @ApiProperty()
    to: string;

    @ApiProperty()
    email: string

    @ApiProperty()
    address: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    dueDate: Date

    @ApiProperty()
    detail: InvoiceDetail[]
}