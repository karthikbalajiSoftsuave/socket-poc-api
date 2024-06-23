import { Schema, model } from 'mongoose';
import { IThesis } from '../common/interface';

const thesisSchema = new Schema<IThesis>(
    {
        name: {
            type: String
        },
        author: {
            type: String
        },
        file: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const ThesisModel = model<IThesis>("thesis", thesisSchema, "revthesisiew");
export default ThesisModel;