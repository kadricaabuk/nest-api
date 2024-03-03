import { IsOptional, IsString } from 'class-validator';
export class EditBookmartkDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  link?: string;
}
