import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async exe_get_list(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async exe_get(id: string): Promise<Users> {
    return await this.usersRepository.findOne(id);
  }

  async exe_add(param: any) {
    const user = await this.usersRepository.create();
    
    user.name = param.name;
    user.email = param.email;

    this.usersRepository.save(user);
  }

  async exe_remove(user: Users) {
    await this.usersRepository.delete(user);
  }
}