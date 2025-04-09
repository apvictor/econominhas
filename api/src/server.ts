import 'dotenv/config';

import { app } from './app';
import { checkDatabaseConnection, getHost, SERVER_PORT } from './config';

const host = getHost();

checkDatabaseConnection().then(() => {
  app.listen(SERVER_PORT, () => console.info(`🚀 Servidor executando ${host}`));
});
