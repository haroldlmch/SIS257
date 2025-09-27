import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty({ message: 'La descripcion no debe estar vacia' })
  @IsString({ message: 'La descripcion debe ser un texto' })
  @MaxLength(50, { message: 'La descripcion debe tener maximo 50 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  descripcion: string;
}
