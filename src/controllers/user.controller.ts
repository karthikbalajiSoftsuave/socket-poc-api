import Router from "express-promise-router";
import { Response } from "express";
import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiRequest, IUser } from "../common/interface";
import { createUserService } from "../services/user.service";
import { createUserValidator } from "../validators/user.validator";

const router = Router();

router.post("/", async (req: IApiRequest<IUser>, res: Response) => {
    try {
        await createUserValidator.validateAsync(req?.body);
        const createUser = await createUserService(req?.body);
        return res.status(createUser?.statusCode).send(createUser);
    } catch (error: any) {
        console.error('[ERROR] in createUser controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});


export default router;