import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AnimesService } from "./animes.service";
import { CreateAnimeDto } from "./dto/create-anime.dto";
import { UpdateAnimeDto } from "./dto/update-anime.dto";

@Controller("animes")
export class AnimesController {
  constructor(private readonly animesService: AnimesService) { }

  @Get()
  findAll() {
    return this.animesService.findAll()
  }

  @Get(":animeId")
  findOne(@Param("animeId", ParseIntPipe) animeId: number) {
    return this.animesService.findOne(animeId)
  }

  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animesService.create(createAnimeDto)
  }

  @Put(":animeId")
  update(@Param("animeId", ParseIntPipe) animeId: number, @Body() updateAnimeDto: UpdateAnimeDto) {
    return this.animesService.update(animeId, updateAnimeDto)
  }

  @Delete(":animeId")
  delete(@Param("animeId", ParseIntPipe) animeId: number) {
    this.animesService.delete(animeId)

    return {
      statusCode: HttpStatus.OK,
      message: "Anime deleted"
    }
  }
}