import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductoDto {
  @IsDefined({ message: 'La categoria no debe estar vacia' })
  @IsInt({ message: 'La categoria debe ser un numero entero' })
  idCategoria: number;

  @IsNotEmpty({ message: 'El codigo no debe estar vacio' })
  @IsString({ message: 'El codigo debe ser un texto' })
  @MaxLength(20, { message: 'El codigo debe tener maximo 20 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  codigo: string;

  @IsNotEmpty({ message: 'La descripcion no debe estar vacia' })
  @IsString({ message: 'La descripcion debe ser un texto' })
  @MaxLength(100, {
    message: 'La descripcion debe tener maximo 100 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  descripcion: string;

  @IsDefined({ message: 'La fecha de vencimiento no debe estar vacia' })
  @IsDateString(
    {},
    { message: 'La fecha de vencimiento debe ser una fecha valida' },
  )
  fechaVencimiento: Date;
}
