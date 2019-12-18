import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import searchRouters from './services';

const router = express();
applyMiddleware(middleware, router);
applyRoutes(searchRouters, router);
const {PORT = 3000} = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});