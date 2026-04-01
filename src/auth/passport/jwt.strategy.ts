import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        let SECRET = process.env.JWT_SECRET

        if (!SECRET) throw new InternalServerErrorException()

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET,
            ignoreExpiration: false
        })
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email }
    }
}
