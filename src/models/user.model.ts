import { Schema, model } from 'mongoose';
import { IUser } from '../common/interface';

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
    }
);

const UserModel = model<IUser>("user", userSchema, "user");
export default UserModel;