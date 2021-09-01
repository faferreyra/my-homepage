import { Injectable } from '@nestjs/common';
import { Application, Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ApplicationsService {
  public getApplications(): Promise<Application[]> {
    return prisma.application.findMany();
  }

  public createApplication(data: Prisma.ApplicationCreateInput): Promise<Application> {
    return prisma.application.create({
      data,
    })
  }
}
