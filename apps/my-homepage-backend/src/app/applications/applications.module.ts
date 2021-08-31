import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Application } from "./application.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([Application])
  ]
})
export class ApplicationsModule {}