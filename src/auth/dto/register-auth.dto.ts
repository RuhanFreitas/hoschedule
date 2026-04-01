import {
    IsEmail,
    IsEnum,
    IsPhoneNumber,
    IsString,
    MinLength
} from 'class-validator'

enum AccountType {
    DOCTOR = 'DOCTOR',
    PATIENT = 'PATIENT'
}

export class RegisterAuthDTO {
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

    @IsEnum(AccountType)
    accountType: AccountType
}
