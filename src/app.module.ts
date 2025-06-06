import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { LookupsModule } from './lookups/lookups.module';

@Module({
  imports: [ProjectsModule, LookupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
