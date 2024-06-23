import { connect } from 'mongoose';

export const dbConnection = async () => {
    try {
        const DB_CONNECTION = process.env.DB_CONNECTION || "";
        await connect(DB_CONNECTION, { dbName: 'review' });
        console.log("[INFO] DB connected successfully!!");

    } catch (error) {
        console.error("[ERROR] in DB Connection:", error);
    }
}