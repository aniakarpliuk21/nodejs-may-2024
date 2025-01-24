import { configure } from "../configs/config";
import { IUser } from "../interfaces/user.interface";

class UserPresenter {
  public toResponse(entity: IUser) {
    return {
      _id: entity._id,
      name: entity.name,
      email: entity.email,
      age: entity.age,
      role: entity.role,
      phone: entity.phone,
      avatar: entity.avatar
        ? `${configure.AWS_S3_ENDPOINT}/${entity.avatar}`
        : null,
      isDeleted: entity.isDeleted,
      isVerified: entity.isVerified,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
export const userPresenter = new UserPresenter();
