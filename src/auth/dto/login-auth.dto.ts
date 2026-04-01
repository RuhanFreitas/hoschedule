import { IsEmail, MinLength } from 'class-validator'

export class LoginAuthDTO {
    @IsEmail()
    email: string

    @MinLength(6)
    password: string
}
