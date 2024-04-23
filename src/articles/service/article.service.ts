import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Article } from '@prisma/client';
import { PrismaService } from 'src/prisma-database/service/prisma.service';
import { CreateArticleDto, UpdateArticleDto } from '../dto/article.dto';

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

  async update(id: number, payload: UpdateArticleDto): Promise<Article> {
    await this.getById(id);
    const updatedArticle = await this.prismaService.article.update({
      where: { id },
      data: payload,
    });

    if (!updatedArticle) {
      throw new BadGatewayException('updating Article Failed');
    }

    return updatedArticle;
  }

  async getById(id: number): Promise<Article> {
    const article = await this.prismaService.article.findUnique({
      where: { id },
    });
    if (!article) {
      throw new NotFoundException('Article Not Found');
    }

    return article;
  }
}
