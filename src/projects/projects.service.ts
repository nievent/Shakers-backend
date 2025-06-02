import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Project } from './projects.interface';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  constructor() {
    const filePath = path.resolve(
      __dirname,
      '../../src/assets/sample_40_projects.json',
    );

    const json = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(json) as unknown;

    // Validamos que sea un array (opcional pero recomendable)
    if (Array.isArray(parsed)) {
      this.projects = parsed as Project[];
    } else {
      throw new Error('Invalid project data format');
    }
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: number): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }
}
