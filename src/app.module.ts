import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SectionsModule } from './sections/sections.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './sections/entities/section.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Section],
      synchronize: false,
    }),
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
