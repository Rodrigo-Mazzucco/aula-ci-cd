import { startServer } from '../tests/helpers/server.js';
const { url } = await startServer(3000);
console.log(`Servidor local em ${url}`);
