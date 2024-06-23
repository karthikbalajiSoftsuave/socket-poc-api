import Joi from "joi";
import {  IUser } from "../common/interface";

export const createUserValidator = Joi.object<IUser>({
    name: Joi.string().required(),
});
