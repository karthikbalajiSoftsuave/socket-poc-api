import { IReview } from "../common/interface";
import ReviewModel from "../models/review.model";

export const addReview = async (review: IReview): Promise<IReview[]> => {
    try {
        const createReview = new ReviewModel(review);
        await createReview.save();
        const reviews = await ReviewModel.find({ thesisId: review?.thesisId });
        return reviews;

    } catch (error: any) {
        console.error('[ERROR]  in createUserService service', error?.message);
        throw error;
    }
}