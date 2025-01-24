import { configure } from "../configs/config";
import {
  IUser,
  IUserListQuery,
  IUserListResponse,
} from "../interfaces/user.interface";

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
  public toShortResponse(entity: IUser) {
    return {
      _id: entity._id,
      name: entity.name,
      age: entity.age,
      avatar: entity.avatar
        ? `${configure.AWS_S3_ENDPOINT}/${entity.avatar}`
        : null,
      createdAt: entity.createdAt,
    };
  }
  public toResponseList(
    entities: IUser[],
    total: number,
    query: IUserListQuery,
  ): IUserListResponse {
    return {
      total,
      data: entities.map(this.toShortResponse),
      ...query,
    };
  }
}
export const userPresenter = new UserPresenter();
