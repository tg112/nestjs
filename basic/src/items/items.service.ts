import { Injectable, NotFoundException } from '@nestjs/common';

import { ItemStatus, Item } from '../generated/prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class ItemsService {
    constructor(private prismaService: PrismaService) {}

    async findAll(): Promise<Item[]> {
        return await this.prismaService.item.findMany();
    }

    async findById(id: string): Promise<Item | undefined> {
        const item = await this.prismaService.item.findUnique({
            where: {
                id
            }
        });
        if (!item) {
            throw new NotFoundException();
        }
        return item;
    }

    async create(createItemDto: CreateItemDto, userId: string): Promise<Item> {
        const { name, price, description} = createItemDto;
        return await this.prismaService.item.create({
            data: {
                name,
                price,
                description,
                status: ItemStatus.ON_SALE,
                userId
            }
        })
    }

    async updateStatus(id: string): Promise<Item | undefined> {
        return await this.prismaService.item.update({
            data: {
                status: 'SOLD_OUT'
            },
            where: {
                id
            }
        })
    }

    async delete(id: string, userId: string): Promise<Item> {
        return this.prismaService.item.delete({
            where: {
                id, userId
            }
        })
    }
}
