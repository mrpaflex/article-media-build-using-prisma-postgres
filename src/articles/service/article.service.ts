import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { PrismaService } from 'src/prisma-database/service/prisma.service';
import { CreateArticleDto } from '../dto/article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateArticleDto) {
    const article = await this.prismaService.article.create({
      data: payload,
    });
    return article;
  }

  async getAll(): Promise<Article[]> {
    return await this.prismaService.article.findMany({});
  }
}
