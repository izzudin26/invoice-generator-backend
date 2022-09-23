import { InvoiceDetail } from "./invoice.schema"

export class CreateInvoiceDTO {
    to: string;
    email: string
    address: string;
    date: Date;
    dueDate: Date
    detail: InvoiceDetail
}