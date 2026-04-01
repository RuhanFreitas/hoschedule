import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterAuthDTO } from './dto/register-auth.dto'
import { LoginAuthDTO } from './dto/login-auth.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() registerAuthDTO: RegisterAuthDTO) {
        const response = this.authService.register(registerAuthDTO)
    }

    @Post('login')
    login(@Body() loginAuthDTO: LoginAuthDTO) {
        const response = this.authService.login(loginAuthDTO)
    }
}
