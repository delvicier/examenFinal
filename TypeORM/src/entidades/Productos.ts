import {Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity} from "typeorm"

@Entity()
export class productos extends BaseEntity {

    // Este decorador es para autoincremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IWLLinP9aZgQbZmDw1yhRz2MXz8zt9XxTl0KgPjfEFB64sBvcSFcuQYNua3NLaTC2ro&usqp=CAU"
    })
    foto: string;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    // Podemos agregarles propiedades como
    // valores por defecto:
    @Column({
        default: "Gato meow meow"
    })
    descripcion : string;

    // Aqui agregamos 2 propiedades
    @CreateDateColumn()
    crearAdd: Date;

    @UpdateDateColumn()
    actualizarUp: Date;
}
