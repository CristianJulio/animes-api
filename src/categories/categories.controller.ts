import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) { }

  @Get()
  findAll() {
    return this.categoriesService.findAll()
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto)
  }

  @Delete(":categoryId")
  delete(@Param("categoryId", ParseIntPipe) categoryId: number) {
    this.categoriesService.delete(categoryId)

    return {
      statusCode: HttpStatus.OK,
      message: "Category deleted"
    }
  }
}