import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsController, ApplicationsService } from '@my-homepage/applications';
import { CoreModule } from '@my-homepage/core';

@Module({
  imports: [CoreModule],
  controllers: [AppController, ApplicationsController],
  providers: [AppService, ApplicationsService],
})
export class AppModule {}
