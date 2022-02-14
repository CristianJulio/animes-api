import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>
  ) { }

  async findAll() {
    return await this.categoriesRepository.find()
  }

  async findOne(categoryId: number) {
    return await this.categoriesRepository.findOne(categoryId)
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepository.create(createCategoryDto)
    return await this.categoriesRepository.save(category)
  }

  async delete(categoryId: number) {
    await this.categoriesRepository.delete(categoryId)
  }
}