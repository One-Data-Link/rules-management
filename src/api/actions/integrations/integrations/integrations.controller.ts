import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { IntegrationsService } from './integrations.service';
import { IntegrationsDto } from './dto/integrations.dto';

@Controller('integrations')
//@Auth()
@ApiTags('Integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Post()
  create(@Body() IntegrationsrDto: IntegrationsDto) {
    return this.integrationsService.create(IntegrationsrDto);
  }

  @Get()
  findAll() {
    return this.integrationsService.findAll();
  }

  @Patch(':idintegrations')
  update(@Param('idintegrations') idintegrations: string, @Body() integrationsDto: IntegrationsDto){
    return this.integrationsService.update(idintegrations,integrationsDto);
  }

  @Delete(':idintegrations')
  delete(@Param('idintegrations') idintegrations: string) {
    return this.integrationsService.delete(idintegrations);
  }

}
