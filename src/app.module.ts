import { Module } from '@nestjs/common';
import { PrismaDatabaseModule } from './prisma-database/module/prisma.module';
import { ArticleModule } from './articles/module/article.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaDatabaseModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
