import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ValidateIDPipe } from 'src/common/pipes/parse-int.pipe';
import { Role } from 'src/users/enums/role.enums';
import { Roles } from 'src/iam/authorization/decorators/roles.decorator';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { CoffeeDto } from './dto/coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Auth(AuthType.Bearer, AuthType.ApiKey)
@Serialize(CoffeeDto)
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Roles(Role.Admin)
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ValidateIDPipe) id: number) {
    return this.coffeesService.findOne(id);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id', ValidateIDPipe) id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id', ValidateIDPipe) id: number) {
    return this.coffeesService.remove(id);
  }
}
