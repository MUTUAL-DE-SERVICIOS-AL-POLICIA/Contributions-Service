import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ContributionsModule } from './contributions/contributions.module';

@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule , CommonModule, ContributionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
