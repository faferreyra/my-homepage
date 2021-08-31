import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './bookmark.entity';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark, Category])],
})
export class BookmarksModule {}
