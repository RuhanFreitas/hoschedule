import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { DoctorModule } from 'src/doctor/doctor.module'
import { PatientModule } from 'src/patient/patient.module'

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' }
        }),
        DoctorModule,
        PatientModule
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
