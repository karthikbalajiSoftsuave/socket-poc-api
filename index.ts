import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { PATHS, SOCKET_EVENTS } from "./src/common/constants";
import { dbConnection } from "./src/connections";
// import { ReviewSocketConnection } from "./src/controllers/review.controller";
import ReviewModel from "./src/models/review.model";
import { IReview } from "./src/common/interface";
import { ReviewSocketConnection } from "./src/controllers/review.controller";
// import swaggerUi from 'swagger-ui-express';
// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerOptions from './swagger';
import routes from "./src/controllers"
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", routes);

// const specs = swaggerJsdoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.get("/api/", async (req: Request, res: Response) => {
    res.send({ status: "success" })
});





ReviewSocketConnection(app);




app.listen(port, async () => {
    console.log(`Express server started at Port - ${port}`);
    await dbConnection();
});