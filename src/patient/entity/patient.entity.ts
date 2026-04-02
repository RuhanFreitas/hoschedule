import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phoneNumber: string
}
