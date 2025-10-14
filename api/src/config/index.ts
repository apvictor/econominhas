import { Prisma } from '../shared/services/prisma';

export const JWT_SECRET = process.env.JWT_SECRET as string;
export const SERVER_PORT = process.env.SERVER_PORT || '3000';
export const SERVER_SCHEME = process.env.SERVER_SCHEME || 'http';
export const SERVER_DOMAIN = process.env.SERVER_DOMAIN || 'localhost';

export function getHost() {
  let host = '';
  if (SERVER_DOMAIN.includes('localhost'))
    host = `${SERVER_SCHEME}://${SERVER_DOMAIN}:${SERVER_PORT}`;
  else host = `${SERVER_SCHEME}://${SERVER_DOMAIN}`;
  return host;
}

export async function checkDatabaseConnection() {
  try {
    await Prisma.$connect();
    console.info('✅ Sucesso ao conectar com banco de dados');
    return true;
  } catch (error) {
    console.error('❌ Falha ao conectar com banco de dados:', error);
    process.exit(1);
  }
}
