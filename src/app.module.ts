import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
    imports: [
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'postgres',
                host: config.get<string>('POSTGRES_HOST'),
                port: config.get<number>('POSTGRES_PORT'),
                username: config.get<string>('POSTGRES_USER'),
                password: config.get<string>('POSTGRES_PASSWORD'),
                database: config.get<string>('POSTGRES_DB'),
                synchronize: config.get<string>('SYNCHRONIZE') === '1',
                autoLoadEntities:
                    config.get<string>('AUTO_LOAD_ENTITIES') === '1',
                logging: true
            })
        })
    ]
})
export class AppModule {}
