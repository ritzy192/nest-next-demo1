/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
    @Get()
    findall(@Req() req: Request, @Res() res: Response): Response{
        console.log(req.url)
        return res.send(req.url)
    }
    @Post()
    create(@Body() createItem: CreateItemDto){
        return {
            name: createItem.name,
            description: createItem.description
        }
    }
}
