import fastify from 'fastify';
import cors from '@fastify/cors';
import { PingResponse } from './shared/types';

const server = fastify({ logger: true });

// Configuration CORS pour autoriser toutes les origines
await server.register(cors, {
  origin: '*',
});

server.get('/ping', async (): Promise<PingResponse> => {
  return { status: 'Shifu is coding', timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log("✅ Backend Fastify démarré sur http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();