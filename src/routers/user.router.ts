import { Router } from "express";

import { AvatarConfig } from "../constans/image.constans";
import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { fileMiddleware } from "../middlewares/file.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();
router.get(
  "/",
  commonMiddleware.validateQuery(UserValidator.getListQuery),
  userController.getList,
);
router.get("/me", authMiddleware.checkAccessToken, userController.getMe);
router.delete("/me", authMiddleware.checkAccessToken, userController.deleteMe);
router.put(
  "/me",
  authMiddleware.checkAccessToken,
  commonMiddleware.validateBody(UserValidator.update),
  userController.updateMe,
);
router.post(
  "/me/avatar",
  authMiddleware.checkAccessToken,
  fileMiddleware.isFileValid("avatar", AvatarConfig),
  userController.uploadAvatar,
);
router.delete(
  "/me/avatar",
  authMiddleware.checkAccessToken,
  userController.deleteAvatar,
);
router.get(
  "/:userId",
  commonMiddleware.isValid("userId"),
  userController.getUserById,
);

export const userRouter = router;
