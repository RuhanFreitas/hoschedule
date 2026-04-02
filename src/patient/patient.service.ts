import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Patient } from './entity/patient.entity'
import { CreatePatientDTO } from './dto/create-patient.dto'

@Injectable()
export class PatientService {
    constructor(private readonly patientRepository: Repository<Patient>) {}

    async create(createPatientDTO: CreatePatientDTO) {
        const patient = await this.patientRepository.save(createPatientDTO)

        return patient
    }

    async findByEmail(email: string) {
        const patient = await this.patientRepository.findOneBy({ email: email })

        return patient
    }
}
