import { Controller, Get, Render, Post, Body, Redirect, Delete, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('/user')
export class UsersController {

  constructor(private readonly userService: UsersService) {}

  @Get()
  @Render('user/index')
  async root() {
    let data: any = {};

    data.users = await this.exe_get_list();
    data.title = 'Database Test';

    console.log(data.users);

    return data;
  }

  @Get()
  async exe_get_list(): Promise<Users[]> {
    return await this.userService.exe_get_list();
  }

  @Post()
  @Redirect('/user')
  async exe_add(@Body() param: any) {
    await this.userService.exe_add(param);
  }

  @Delete(':id')
  async exe_remove(@Param('id') id: string) {
    const user: Users = await this.userService.exe_get(id);
    await this.userService.exe_remove(user);
  }

}
