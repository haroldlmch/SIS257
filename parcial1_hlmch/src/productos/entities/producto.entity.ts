import { Categoria } from 'src/categorias/entities/categoria.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('integer', { name: 'id_categoria' })
  idCategoria: number;

  @Column('varchar', { length: 20 })
  codigo: string;

  @Column('varchar', { length: 100 })
  descripcion: string;

  @Column('date', { name: 'fecha_vencimiento' })
  fechaVencimiento: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria: Categoria;
}
