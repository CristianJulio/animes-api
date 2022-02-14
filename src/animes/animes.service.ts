import { Anime } from "./entities/anime.entity";
import { CategoriesService } from "src/categories/categories.service";
import { Category } from "src/categories/entities/category.entity";
import { CreateAnimeDto } from "./dto/create-anime.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateAnimeDto } from "./dto/update-anime.dto";

@Injectable()
export class AnimesService {
  constructor(
    @InjectRepository(Anime)
    private animesRepository: Repository<Anime>,
    private categoriesService: CategoriesService
  ) { }

  async findAll() {
    return await this.animesRepository.find({ relations: ["categories"] })
  }

  async findOne(animeId: number) {
    return await this.animesRepository.findOne(animeId)
  }

  async create(createAnimeDto: CreateAnimeDto) {
    const { categories, ...rest } = createAnimeDto
    const anime = this.animesRepository.create({ ...rest, categories: [] })

    for (const i in categories) {
      const category: Category = await this.categoriesService.findOne(Number(categories[i]))
      anime.categories.push(category)
    }

    return await this.animesRepository.save(anime)
  }

  async update(animeId: number, updateAnimeDto: UpdateAnimeDto) {
    const { raw } = await this.animesRepository.createQueryBuilder()
      .update(Anime)
      .set({ ...updateAnimeDto })
      .where("id = :id", { id: animeId })
      .returning("*")
      .execute()

    return raw[0]
  }

  async delete(animeId: number) {
    await this.animesRepository.delete(animeId)
  }
}