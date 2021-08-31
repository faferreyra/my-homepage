import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Application } from './applications/application.entity';
import { ApplicationsModule } from './applications/applications.module';
import { Bookmark } from './bookmarks/bookmark.entity';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { Category } from './bookmarks/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.86.202',
      port: 3306,
      username: 'developer',
      password: 'nemonemo',
      database: 'MY_HOMEPAGE_DEV',
      synchronize: true,
      entities: [Application, Category, Bookmark],
    }),
    ApplicationsModule,
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
