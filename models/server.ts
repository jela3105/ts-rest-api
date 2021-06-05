import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async connectDB() {
    try {
      await db.authenticate();
      console.log("dbConnect");
    } catch (error) {
      throw new Error(error);
    }
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server running in port: " + this.port);
    });
  }
}

export default Server;
