import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { StaticData } from './lookups.interface';

@Injectable()
export class LookupsService {
  private data: StaticData;

  constructor() {
    const filePath = path.resolve(
      __dirname,
      '../../src/assets/Static_data.json',
    );

    const raw = fs.readFileSync(filePath, 'utf-8');
    this.data = JSON.parse(raw) as StaticData;
  }

  findAll(): StaticData {
    return this.data;
  }
}
