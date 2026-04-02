import { Injectable } from '@nestjs/common'
import { LoginAuthDTO } from './dto/login-auth.dto'
import { AccountType, RegisterAuthDTO } from './dto/register-auth.dto'
import { JwtService } from '@nestjs/jwt'
import { HashService } from './hash/hash.service'
import { DoctorService } from 'src/doctor/doctor.service'
import { PatientService } from 'src/patient/patient.service'

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly hashService: HashService,
        private readonly doctorService: DoctorService,
        private readonly patientService: PatientService
    ) {}

    async register(registerAuthDTO: RegisterAuthDTO) {
        const hash = await this.hashService.hash(registerAuthDTO.password)
        const userData = { ...registerAuthDTO, password: hash }

        if (registerAuthDTO.accountType === AccountType.DOCTOR) {
            const doctor = await this.doctorService.create(userData)

            const payload = { sub: doctor.id, email: doctor.email }

            return payload
        }

        const patient = await this.patientService.create(userData)

        const payload = { sub: patient.id, email: patient.email }

        return payload
    }

    async login(loginAuthDTO: LoginAuthDTO) {}
}
