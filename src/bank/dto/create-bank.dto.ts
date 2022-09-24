import {ApiProperty} from "@nestjs/swagger"
 
export class CreateBankDto {
    @ApiProperty()
    fullname: string

    @ApiProperty()
    name: string;

    @ApiProperty()
    number: string
}
