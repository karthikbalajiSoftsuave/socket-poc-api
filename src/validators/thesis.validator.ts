import Joi from "joi";
import { IThesis } from "../common/interface";

export const createThesisValidator = Joi.object<IThesis>({
    name: Joi.string().required(),
    file: Joi.string().required(),
    author: Joi.string().required(),
});

export const updateThesisValidator = Joi.object<IThesis>({
    name: Joi.string().required(),
    file: Joi.string().required(),
    author: Joi.string().required(),
    _id: Joi.string().required()
});