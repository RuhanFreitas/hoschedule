import { IsEmail, IsPhoneNumber, IsString, MinLength } from 'class-validator'

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
}
