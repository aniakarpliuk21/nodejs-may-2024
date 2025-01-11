import { ApiError } from "../errors/api-error";
import { ITokenPayload } from "../interfaces/token.interface";
import { IUser, IUserUpdateDto } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }

  public async getMe(tokenPayload: ITokenPayload): Promise<IUser> {
    const user = await userRepository.getUserById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }
  public async deleteMe(tokenPayload: ITokenPayload): Promise<void> {
    const user = await userRepository.getUserById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    await userRepository.delete(tokenPayload.userId);
  }

  public async updateMe(
    tokenPayload: ITokenPayload,
    dto: IUserUpdateDto,
  ): Promise<IUser> {
    const user = await userRepository.getUserById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return await userRepository.updateUser(tokenPayload.userId, dto);
  }
  public async getUserById(userId: string): Promise<IUser> {
    const user = await userRepository.getUserById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }

  public async isEmailUnique(email: string): Promise<void> {
    const user = await userRepository.getByEmail(email);
    if (user) {
      throw new ApiError("Email is already in use", 409);
    }
  }
}

export const userService = new UserService();
