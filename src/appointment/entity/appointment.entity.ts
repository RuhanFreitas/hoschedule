import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    speciality: string

    @Column()
    patientId: string

    @Column()
    doctorId: string

    @Column({ type: 'timestamptz' })
    startAt: Date

    @Column({ type: 'timestamptz' })
    endAt: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
