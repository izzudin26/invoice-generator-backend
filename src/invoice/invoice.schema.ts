import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class InvoiceDetail {
    rate: number;
    label: string;
}

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
    @Prop({ required: true })
    to: string;

    @Prop({ required: true })
    email: string

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    dueDate: Date

    @Prop({required: true})
    detail: InvoiceDetail

    @Prop({default: Date.now() })
    timestamp: number
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);