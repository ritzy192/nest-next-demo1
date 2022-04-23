/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findall(){
        return 'all items'
    }
    @Post()
    create(@Body() createItem: CreateItemDto){
        return {
            name: createItem.name,
            description: createItem.description
        }
    }
}
