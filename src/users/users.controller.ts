import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(":userId")
  findOne(@Param("userId", ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Put(":userId")
  update(@Param("userId", ParseIntPipe) userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto)
  }

  @Delete(":userId")
  delete(@Param("userId", ParseIntPipe) userId: number) {
    this.usersService.delete(userId)
    return {
      statusCode: HttpStatus.OK,
      message: "User deleted"
    }
  }

  // User List
  @Get(":userId/animes/list")
  async getUserAnimeList(@Param("userId") userId: number) {
    return this.usersService.getUserAnimeList(userId)
  }

  @Post("/:userId/animes/add/:animeId")
  async addAnimeToUserList(@Param("userId", ParseIntPipe) userId: number, @Param("animeId", ParseIntPipe) animeId: number) {
    const anime = await this.usersService.addAnimeToUserList(userId, animeId)
    return {
      statusCode: HttpStatus.OK,
      message: "Anime added to user list",
      data: anime
    }

  }

  @Delete("/:userId/animes/remove/:animeId")
  async removeAnimeFromUserList(@Param("userId", ParseIntPipe) userId: number, @Param("animeId", ParseIntPipe) animeId: number) {
    this.usersService.removeAnimeFromUserList(userId, animeId)
    return {
      statusCode: HttpStatus.OK,
      messages: "Anime removed from user list"
    }
  }
}