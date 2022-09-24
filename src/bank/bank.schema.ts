import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type BankDocument = Bank & Document;

@Schema()
export class Bank {
    @Prop()
    fullname: string

    @Prop()
    name: string

    @Prop()
    number: string

    @Prop({default: Date.now() })
    timestamp: number
}

export const BankSchema = SchemaFactory.createForClass(Bank);