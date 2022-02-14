import { Anime } from "./entities/anime.entity";
import { AnimesController } from "./animes.controller";
import { AnimesService } from "./animes.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "src/users/users.module";
import { CategoriesModule } from "src/categories/categories.module";

@Module({
  imports: [TypeOrmModule.forFeature([Anime]), CategoriesModule],
  controllers: [AnimesController],
  providers: [AnimesService],
  exports: [AnimesService]
})
export class AnimesModule { }