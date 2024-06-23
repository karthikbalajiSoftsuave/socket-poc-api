import Router from "express-promise-router";
import userController from "../controllers/user.controller";
import thesisController from "../controllers/thesis.controller"

const router = Router();

router.use("/user", userController);
router.use("/thesis", thesisController)

export default router;
