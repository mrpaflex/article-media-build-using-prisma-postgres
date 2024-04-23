import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { CreateArticleDto } from '../dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAll() {
    return await this.articleService.getAll();
  }

  @Post()
  async create(@Body() payload: CreateArticleDto) {
    return await this.articleService.create(payload);
  }
}
