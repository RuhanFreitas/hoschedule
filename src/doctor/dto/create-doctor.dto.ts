import {
    IsEmail,
    IsEnum,
    IsPhoneNumber,
    IsString,
    MinLength
} from 'class-validator'
import { Speciality } from 'src/auth/dto/register-auth.dto'

export class CreateDoctorDTO {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsEmail()
    email: string

    @IsString()
    @MinLength(6)
    password: string

    @IsPhoneNumber('BR')
    phoneNumber: string

    @IsEnum(Speciality)
    speciality: Speciality
}
