import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            database: process.env.DATABASE,
            synchronize: process.env.SYNCHRONIZE === '1',
            autoLoadEntities: process.env.AUTO_LOAD_ENTITIES === '1'
        })
    ]
})
export class AppModule {}
