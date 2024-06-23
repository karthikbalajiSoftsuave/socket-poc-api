import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiResponse, IUser } from "../common/interface";
import UserModel from "../models/user.model";

export const createUserService = async (product: IUser): Promise<IApiResponse<IUser>> => {
    const response: IApiResponse = {
        statusCode: 400,
        status: CONSTANT_MESSAGE.STATUS.ERROR,
        message: CONSTANT_MESSAGE.MESSAGE.SOMETHING_WENT_WRONG,
        data: null
    };
    try {
        const createUser = new UserModel(product);
        const addedUser = await createUser?.save();
        response.status = CONSTANT_MESSAGE.STATUS.SUCCESS;
        response.message = CONSTANT_MESSAGE.USER.CREATE;
        response.data = addedUser;
        response.statusCode = 200;
    } catch (error: any) {
        console.error('[ERROR]  in createUserService service', error?.message);
        response.data = error?.response?.data || error?.message;
    }
    return response;
}