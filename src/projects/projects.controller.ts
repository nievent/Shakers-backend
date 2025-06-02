import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }
}
