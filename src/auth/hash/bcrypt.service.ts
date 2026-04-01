import { Injectable } from '@nestjs/common'
import { HashService } from './hash.interface'
import * as bcrypt from 'bcrypt'

@Injectable()
export class BcryptService implements HashService {
    async hash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        return hash
    }

    async compare(password: string, hash: string): Promise<boolean> {
        const isMatch = await bcrypt.compare(password, hash)

        return isMatch
    }
}
