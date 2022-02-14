import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateAnimeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  episodes: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  status: string

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  score: number

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  picture: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  released_date: string

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  type: string
}