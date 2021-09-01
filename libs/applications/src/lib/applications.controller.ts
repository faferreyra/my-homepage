import { Body, Controller, Get, Post } from '@nestjs/common';
import { Application, Prisma } from '@prisma/client';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}

  @Get()
  public getApplications(): Promise<Application[]> {
    return this.applicationsService.getApplications();
  }

  @Post()
  public createApplication(@Body() data: Prisma.ApplicationCreateInput): Promise<Application> {
    return this.applicationsService.createApplication(data);
  }
}
