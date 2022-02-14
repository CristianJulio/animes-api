import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  second_name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  first_lastname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  second_lastname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  picture: string;
}