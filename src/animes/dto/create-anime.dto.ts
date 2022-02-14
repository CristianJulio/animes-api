import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAnimeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  episodes: number;

  @IsNotEmpty()
  @IsString()
  status: string

  @IsNotEmpty()
  @IsNumber()
  score: number

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  picture: string

  @IsNotEmpty()
  @IsString()
  released_date: string

  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  @IsArray({ message: "Las categorías deben ser una arreglo de Ids" })
  @ArrayMinSize(1, { message: "El anime debe tener por lo menos una categoría" })
  categories: number[]
}