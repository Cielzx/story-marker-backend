import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private UserRepository: UsersRepository) {}

  async create(data: CreateUserDto) {
    const findUser = await this.UserRepository.findByEmail(data.email);

    if (findUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.UserRepository.create(data);

    return user;
  }

  async findAll() {
    const users = await this.UserRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.UserRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByEmail(email: string) {
    const userEmail = await this.UserRepository.findByEmail(email);
    return userEmail;
  }

  async update(data: UpdateUserDto, id: string) {
    const updatedUser = await this.UserRepository.update(data, id);
    return updatedUser;
  }

  async remove(id: string) {
    await this.UserRepository.delete(id);
    return;
  }
}
