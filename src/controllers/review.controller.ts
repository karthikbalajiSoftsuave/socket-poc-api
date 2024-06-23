
import { Server } from "socket.io";
import { PATHS, SOCKET_EVENTS } from "../common/constants";
import { IReview } from "../common/interface";
import ReviewModel from "../models/review.model";
import { createServer } from "http";
import * as dotenv from "dotenv";
import { Express } from "express";
import { addReview } from "../services/chat.service";

dotenv.config();

export const ReviewSocketConnection = (app: Express) => {
    const server = createServer(app);
    const io = new Server(server, {
        path: PATHS.SOCKET,
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        },
    });

    io.on(SOCKET_EVENTS.CONNECTION, (socket: any) => {
        console.log("New Client connected");
        socket.on(SOCKET_EVENTS.JOIN_ROOM, async (thesisId: string) => {
            socket.join(thesisId)
            try {
                const reviews = await ReviewModel.find({ thesisId });
                socket.emit(SOCKET_EVENTS.NEW_REVIEW, reviews);
            } catch (error) {
                console.error('Error fetching reviews from DB', error);
            }
        });
        socket.on(SOCKET_EVENTS.ADD_REVIEW, async (review: IReview) => {
            const { thesisId } = review;
            try {
                const reviews = await addReview(review)
                io.to(thesisId).emit(SOCKET_EVENTS.NEW_REVIEW, reviews);
            } catch (error) {
                console.error('Error saving review to DB', error);
            }
        });

        socket.on(SOCKET_EVENTS.DISCONNECTION, () => {
            console.log('Client disconnected');
        });
    })

    server.listen(process.env.SOCKET_PORT);
}