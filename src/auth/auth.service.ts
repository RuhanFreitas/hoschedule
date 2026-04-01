import { Injectable } from '@nestjs/common'
import { LoginAuthDTO } from './dto/login-auth.dto'
import { RegisterAuthDTO } from './dto/register-auth.dto'

@Injectable()
export class AuthService {
    constructor() {}

    async register(registerAuthDTO: RegisterAuthDTO) {}

    async login(loginAuthDTO: LoginAuthDTO) {}
}
