/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService){}

    @Get()
    findall(): Item[]{
        return this.itemService.findAll();
    }
    
    // @Get(':id')
    // find(@Param() param){
    //     return 'Item ' + param.id  
    // }
    
    //short way to use param
    @Get(':id')
    find(@Param('id') id){
        return this.itemService.findOne(id)  
    }

    @Post()
    create(@Body() createItem: CreateItemDto){
        return {
            name: createItem.name,
            description: createItem.description
        }
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `delete ${id}`
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto) {
        return {
            updatedName : updateItemDto.name
        }
    }
}
