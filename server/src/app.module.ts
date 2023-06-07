import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './config/configuration';
import { PostgresModule } from 'nest-postgres';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    // PostgresModule.forRoot({
    //   connectionString:
    //     'postgresql://postgres:Secretyu26061976@localhost:5432/kremovar_new_nest-next',
    // }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [],
      }),
    }),

    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
