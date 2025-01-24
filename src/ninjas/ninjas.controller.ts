import { Controller, Delete, Body, Get, Param, Post, Put, Query, NotFoundException, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from '../belt/belt.guard';


@Controller('ninjas')
export class NinjasController {
    constructor(private ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: "sword" | "gun" | "nunchucks") {
        //const service = new NinjasService();
        return this.ninjasService.getNinjas(weapon);
    }
    
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try{
            return this.ninjasService.getOneNinja(id);
        }catch(e){
           throw new NotFoundException();
        }
        
    }
    
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
       return this.ninjasService.createNinja(createNinjaDto);
    }

    @Put(':id')
    updateNinja(@Param('id') id: string , @Body() updateNinjaDto: UpdateNinjaDto) {
       return this.ninjasService.updateNinja(+id, updateNinjaDto);
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: string) {
        return this.ninjasService.removeNinja(+id);
    }

}
