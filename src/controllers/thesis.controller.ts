import Router from "express-promise-router";
import { Response } from "express";
import { CONSTANT_MESSAGE } from "../common/constants";
import { IApiRequest, IThesis } from "../common/interface";
import { createThesisService, getAllThesisService, updateThesisService } from "../services/thesis.service";
import { createThesisValidator, updateThesisValidator } from "../validators/thesis.validator";

const router = Router();

router.post("/", async (req: IApiRequest<IThesis>, res: Response) => {
    try {
        await createThesisValidator.validateAsync(req?.body);
        const createUser = await createThesisService(req?.body);
        return res.status(createUser?.statusCode).send(createUser);
    } catch (error: any) {
        console.error('[ERROR] in createUser controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.get("/", async (req: IApiRequest, res: Response) => {
    try {
        const createUser = await getAllThesisService();
        return res.status(createUser?.statusCode).send(createUser);
    } catch (error: any) {
        console.error('[ERROR] in createUser controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.put("/", async (req: IApiRequest<IThesis>, res: Response) => {
    try {
        await updateThesisValidator.validateAsync(req?.body);
        const createUser = await updateThesisService(req?.body);
        return res.status(createUser?.statusCode).send(createUser);
    } catch (error: any) {
        console.error('[ERROR] in createUser controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

router.delete("/:thesis_id", async (req: IApiRequest<IThesis>, res: Response) => {
    try {
        await createThesisValidator.validateAsync(req?.body);
        const createUser = await createThesisService(req?.body);
        return res.status(createUser?.statusCode).send(createUser);
    } catch (error: any) {
        console.error('[ERROR] in createUser controller: ', error);
        return res.status(401).send({ statusCode: 401, status: CONSTANT_MESSAGE.STATUS.ERROR, message: error.message });
    }
});

export default router;