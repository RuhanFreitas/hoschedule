import { Injectable } from '@nestjs/common'
import { RegisterDTO } from './dto/register-auth.dto'

@Injectable()
export class AuthService {
    register(registerDTO: RegisterDTO) {
        return registerDTO
    }

    login(loginDTO: any) {
        return loginDTO
    }
}
