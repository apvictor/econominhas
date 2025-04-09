import 'dotenv/config';

import { exit } from 'process';
import swaggerAutogen from 'swagger-autogen';

import { SERVER_DOMAIN, SERVER_PORT, SERVER_SCHEME } from '..';

const outputFile = '../swagger/swagger_output.json';
const endpointsFiles = ['../../routes/api'];

const doc = {
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: '',
    contact: { name: 'Armando Pereira' },
  },
  host: `${SERVER_DOMAIN}${SERVER_SCHEME == 'https' ? '' : `:${SERVER_PORT}`}`,
  basePath: '/',
  schemes: [SERVER_SCHEME],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'authorization',
      description: 'Token Authorization',
    },
  },
};

swaggerAutogen({ language: 'pt-BR' })(outputFile, endpointsFiles, doc).then(
  () => exit(),
);
