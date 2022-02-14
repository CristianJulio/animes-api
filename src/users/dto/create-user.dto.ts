import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  second_name: string;

  @IsString()
  @IsNotEmpty()
  first_lastname: string;

  @IsString()
  @IsNotEmpty()
  second_lastname: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  picture: string;
}