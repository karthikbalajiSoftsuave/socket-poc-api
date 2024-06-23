import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiResponse, IThesis } from "../common/interface";
import ThesisModel from "../models/thesis.model";
const objectId = require('mongodb').ObjectId;

export const createThesisService = async (thesis: IThesis): Promise<IApiResponse<IThesis>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const createThesis = new ThesisModel(thesis);
        const addedThesis = await createThesis?.save();
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.THESIS.CREATE;
        response.data = addedThesis;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in createThesisService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const getAllThesisService = async (): Promise<IApiResponse<IThesis[]>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const allThesis = await ThesisModel.find({});
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.MESSAGE.SUCCESSFULLY_FETCHED;
        response.data = allThesis;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in getAllThesisService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const updateThesisService = async (thesis: IThesis): Promise<IApiResponse<IThesis>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const { _id, ...rest } = thesis;
        const updateThesis = await ThesisModel.findOneAndUpdate({ _id: objectId(thesis?._id) }, { ...rest }, { returnDocument: "after" });
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.THESIS.UPDATED;
        response.data = updateThesis;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in updateThesisService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}

export const deleteThesisService = async (thesis: IThesis): Promise<IApiResponse<IThesis>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const { _id, ...rest } = thesis;
        const updateThesis = await ThesisModel.findOneAndUpdate({ _id: objectId(thesis?._id) }, { ...rest }, { returnDocument: "after" });
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.THESIS.UPDATED;
        response.data = updateThesis;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in updateThesisService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}