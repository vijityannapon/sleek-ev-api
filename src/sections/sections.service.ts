import { Injectable } from '@nestjs/common';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionRepository: Repository<Section>,
  ) {}
  findAll() {
    return this.sectionRepository.find({
      order: {
        ordinal: 'ASC',
      },
    });
  }

  update(id: string, updateSectionDto: UpdateSectionDto) {
    return this.sectionRepository.update(id, updateSectionDto);
  }
}
