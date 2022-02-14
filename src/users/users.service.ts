import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "./dto/create-user.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { AnimesService } from 'src/animes/animes.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private animesService: AnimesService
  ) { }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOne(userId: number) {
    return await this.userRepository.findOne(userId)
  }

  async findOneByUsername(username: string) {
    return await this.userRepository.createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.username = :username", { username })
      .getOne()
  }

  async create(CreateUserDto: CreateUserDto) {
    const { password, ...rest } = CreateUserDto
    const user = this.userRepository.create(rest)

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    const { password: pass, ...savedUser } = await this.userRepository.save(user)
    return savedUser
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const { raw } = await this.userRepository.createQueryBuilder()
      .update(User)
      .set({ ...updateUserDto })
      .where("id = :userId", { userId })
      .returning("*")
      .execute()

    return raw[0]
  }

  async delete(userId: number) {
    await this.userRepository.delete(userId)
  }

  // User List
  async getUserAnimeList(userId: number) {
    return await this.userRepository.createQueryBuilder()
      .relation(User, "animes")
      .of(userId)
      .loadMany()

  }

  async addAnimeToUserList(userId: number, animeId: number) {
    const anime = await this.animesService.findOne(animeId)

    await this.userRepository.createQueryBuilder()
      .relation(User, "animes")
      .of(userId)
      .add(animeId)

    return anime
  }

  async removeAnimeFromUserList(userId: number, animeId: number) {
    await this.userRepository.createQueryBuilder()
      .relation(User, "animes")
      .of(userId)
      .remove(animeId)
  }
}