import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSectionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  ordinal: number;
}
