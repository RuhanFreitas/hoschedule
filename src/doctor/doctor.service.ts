import { Injectable } from '@nestjs/common'
import { CreateDoctorDTO } from './dto/create-doctor.dto'

@Injectable()
export class DoctorService {
    async create(createDoctorDTO: CreateDoctorDTO) {
        return ''
    }
}
