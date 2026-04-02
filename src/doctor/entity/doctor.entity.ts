import { Speciality } from 'src/auth/dto/register-auth.dto'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    number: string

    @Column()
    speciality: Speciality
}
