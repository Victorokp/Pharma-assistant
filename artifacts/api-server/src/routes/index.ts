import { Router, type IRouter } from "express";
import healthRouter from "./health";
import pharmaRouter from "./pharma";
import studentRouter from "./student";
import documentsRouter from "./documents";

const router: IRouter = Router();

router.use(healthRouter);
router.use(pharmaRouter);
router.use(studentRouter);
router.use(documentsRouter);

export default router;
