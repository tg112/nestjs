// Mock Prisma Client for Jest tests

export enum ItemStatus {
  ON_SALE = 'ON_SALE',
  SOLD_OUT = 'SOLD_OUT',
}

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string | null;
  status: ItemStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export class PrismaClient {
  item = {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
}

export const Prisma = {};
