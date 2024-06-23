import { Schema, model } from 'mongoose';
import { IReview } from '../common/interface';

const reviewSchema = new Schema<IReview>(
    {
        review: {
            type: String
        },
        thesisId: {
            type: String
        },
        from: {
            type: String
        },
        createdTime: {
            type: Date
        },
        updatedTime: {
            type: Date
        }
    },
    {
        timestamps: true,
    }
);

const ReviewModel = model<IReview>("review", reviewSchema, "review");
export default ReviewModel;