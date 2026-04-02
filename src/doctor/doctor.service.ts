import { Injectable } from '@nestjs/common'
import { CreateDoctorDTO } from './dto/create-doctor.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Doctor } from './entity/doctor.entity'
import { Repository } from 'typeorm'

@Injectable()
export class DoctorService {
    constructor(
        @InjectRepository(Doctor)
        private readonly doctorRepository: Repository<Doctor>
    ) {}

    async create(createDoctorDTO: CreateDoctorDTO) {
        const doctor = await this.doctorRepository.save(createDoctorDTO)

        return doctor
    }

    async findByEmail(email: string) {
        const doctor = await this.doctorRepository.findOneBy({ email: email })

        return doctor
    }
}
