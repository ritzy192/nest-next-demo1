/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findall(): string{
        return 'Hello all items'
    }
    
    // @Get(':id')
    // find(@Param() param){
    //     return 'Item ' + param.id  
    // }
    
    //short way to use param
    @Get(':id')
    find(@Param('id') id){
        return 'Item ' + id  
    }

    @Post()
    create(@Body() createItem: CreateItemDto){
        return {
            name: createItem.name,
            description: createItem.description
        }
    }
}
