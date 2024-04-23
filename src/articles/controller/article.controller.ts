import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { CreateArticleDto, UpdateArticleDto } from '../dto/article.dto';

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

  @Patch(':id')
  async update(@Param('id') id: number, @Body() payload: UpdateArticleDto) {
    return await this.articleService.update(+id, payload);
  }
}
