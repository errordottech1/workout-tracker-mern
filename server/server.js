import express from "express";
import dotenv from "dotenv";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import { handler } from "./middleware/error.js";

dotenv.config();

const port = process.env.PORT || 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/api/exercise", exerciseRoutes);

server.use(handler);

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
