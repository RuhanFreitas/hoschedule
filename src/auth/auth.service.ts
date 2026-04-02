import {
    BadRequestException,
    Injectable,
    NotFoundException
} from '@nestjs/common'
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

            return this.jwtService.sign(payload)
        }

        const patient = await this.patientService.create(userData)

        const payload = { sub: patient.id, email: patient.email }

        return this.jwtService.sign(payload)
    }

    async login(loginAuthDTO: LoginAuthDTO) {
        const email = loginAuthDTO.email

        const user =
            (await this.doctorService.findByEmail(email)) ||
            (await this.patientService.findByEmail(email))

        if (!user) {
            throw new NotFoundException('User not found')
        }

        const isMatch = this.hashService.compare(
            loginAuthDTO.password,
            user.password
        )

        if (!isMatch) {
            throw new BadRequestException('Incorrect password')
        }

        const payload = { sub: user.id, email: user.email }

        return this.jwtService.sign(payload)
    }
}
