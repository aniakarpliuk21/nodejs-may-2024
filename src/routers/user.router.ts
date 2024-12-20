import { Router } from "express";

import { userController } from "../controllers/user.controller";

const router = Router();
router.get("/", userController.getList);
router.post("/", userController.create);
router.delete("/:userId", userController.delete);
router.get("/:userId", userController.getUserById);
router.put("/:userId", userController.updateUser);

export const userRouter = router;
