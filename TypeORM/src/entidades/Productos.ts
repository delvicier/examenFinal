import {Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class productos extends BaseEntity {

    // Este decorador es para autoincremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: "https://www.faunaencasa.com/wp-content/uploads/2017/10/01-880x660.jpg"
    })
    foto: string;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    // Podemos agregarles propiedades como
    // valores por defecto:
    @Column({
        default: "Este gato te amara siempre miau miau"
    })
    descripcion : string;

    // Aqui agregamos 2 propiedades
    @CreateDateColumn()
    crearAdd: Date;

    @UpdateDateColumn()
    actualizarUp: Date;
}
