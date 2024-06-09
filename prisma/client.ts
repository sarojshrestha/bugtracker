import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Ensure that `globalThis` has the correct type to hold the `prismaGlobal` property
interface CustomGlobal extends NodeJS.Global {
  prismaGlobal?: PrismaClient;
}

declare const global: CustomGlobal;

const prisma = global.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') global.prismaGlobal = prisma;

export default prisma;
