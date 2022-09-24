import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createBankDto: CreateBankDto) {
    const bank = await this.bankService.create(createBankDto);
    return {
      status: HttpStatus.OK,
      message: "Success create Bank",
      data: bank
    }
  }

  @Get()
  async findAll() {
    const banks = await this.bankService.findAll();
    return {
      status: HttpStatus.OK,
      message: "Success get collection bank",
      data: banks
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bank = await this.bankService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: `Success get bank`,
      data: bank
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
    await this.bankService.update(id, updateBankDto);
    return {
      status: HttpStatus.OK,
      message: "success update bank"
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.bankService.remove(id);
    return {
      status: HttpStatus.OK,
      message: "success delete bank"
    }
  }
}
