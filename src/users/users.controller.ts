import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('/user')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  // @Get()
  // @Render('user/index')
  // root() {
  //   let data = this.findAll();

  //   console.log(data);

  //   return data;
  // }

  @Get('/findAll')
  async findAll(): Promise<Users[]> {
    return await this.userService.findAll();
  }
}
