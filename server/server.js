import express from "express";
import dotenv from "dotenv";
import exerciseRoutes from "./route/exerciseRoutes.js";
import { connect } from "./config/database.js";
dotenv.config();

connect();

const port = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/exercise", exerciseRoutes);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
