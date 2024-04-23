import { Module } from '@nestjs/common';
import { ArticleController } from '../controller/article.controller';
import { ArticleService } from '../service/article.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
