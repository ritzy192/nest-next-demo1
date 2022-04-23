/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: 'wqrqwrfe1431234',
            name: 'Item 1',
            description: 'this is item 1',
            quantity: 4
        },
        {
            id: 'wqrqwrfesdfs431234',
            name: 'Item 2',
            description: 'this is item 2',
            quantity: 8
        }
    ]
}
