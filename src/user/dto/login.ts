import { PartialType, ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiProperty()
    username: string

    @ApiProperty()
    password: string
}
