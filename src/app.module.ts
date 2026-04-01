import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        AuthModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' }
        })
    ]
})
export class AppModule {}
