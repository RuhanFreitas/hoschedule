import {
    IsEmail,
    IsEnum,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength
} from 'class-validator'

export enum AccountType {
    DOCTOR = 'DOCTOR',
    PATIENT = 'PATIENT'
}

export enum Speciality {
    CARDIOLOGY = 'CARDIOLOGY',
    DERMATOLOGY = 'DERMATOLOGY',
    NEUROLOGY = 'NEUROLOGY',
    PEDIATRICS = 'PEDIATRICS',
    PSYCHIATRY = 'PSYCHIATRY',
    ONCOLOGY = 'ONCOLOGY',
    ORTHOPEDICS = 'ORTHOPEDICS',
    GYNECOLOGY = 'GYNECOLOGY',
    OPHTHALMOLOGY = 'OPHTHALMOLOGY',
    GENERAL_SURGERY = 'GENERAL SURGERY'
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

    @IsOptional()
    @IsEnum(Speciality)
    speciality: Speciality
}
