import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get()
  findAll() {
    return this.sectionsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionsService.update(id, updateSectionDto);
  }
}
