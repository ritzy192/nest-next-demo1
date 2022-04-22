/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findall(){
        return 'all items'
    }
    @Post()
    createItem(){
        return 'created item'
    }
}
