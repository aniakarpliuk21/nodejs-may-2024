import { ApiError } from "../errors/api-error";
import { IUser, IUserUpdateDto } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }
  public async delete(userId: string): Promise<void> {
    await userRepository.delete(userId);
  }

  public async getUserById(userId: string): Promise<IUser> {
    return await userRepository.getUserById(userId);
  }

  public async updateUser(userId: string, dto: IUserUpdateDto): Promise<IUser> {
    return await userRepository.updateUser(userId, dto);
  }

  public async isEmailUnique(email: string): Promise<void> {
    const user = await userRepository.getByEmail(email);
    if (user) {
      throw new ApiError("Email is already in use", 409);
    }
  }
}

export const userService = new UserService();
