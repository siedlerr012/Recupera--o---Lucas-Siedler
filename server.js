import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import produtoRoutes from './src/routes/produtoRoutes.js'
import categoriaRoutes from './src/routes/categoriaRoutes.js'




dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(produtoRoutes);
server.use(categoriaRoutes);



server.listen(process.env.PORT);