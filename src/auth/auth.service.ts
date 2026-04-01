import { Injectable } from '@nestjs/common'
import { LoginAuthDTO } from './dto/login-auth.dto'
import { RegisterAuthDTO } from './dto/register-auth.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async register(registerAuthDTO: RegisterAuthDTO) {}

    async login(loginAuthDTO: LoginAuthDTO) {}
}
