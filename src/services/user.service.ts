import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<IUser[]> {
    return await userRepository.getList();
  }

  public async create(dto: Partial<IUser>): Promise<IUser> {
    return await userRepository.create(dto);
  }

  public async delete(userId: number): Promise<void> {
    await userRepository.delete(userId);
  }

  public async getUserById(userId: number): Promise<IUser> {
    return await userRepository.getUserById(userId);
  }

  public async updateUser(userId: number, dto: IUser): Promise<IUser> {
    return await userRepository.updateUser(userId, dto);
  }
}

export const userService = new UserService();
