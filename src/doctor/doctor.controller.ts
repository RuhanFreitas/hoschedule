import { Controller, Post } from '@nestjs/common'
import { DoctorService } from './doctor.service'
import { CreateDoctorDTO } from './dto/create-doctor.dto'

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {}

    @Post('create')
    async create(createDoctorDTO: CreateDoctorDTO) {
        const response = await this.doctorService.create(createDoctorDTO)
    }
}
