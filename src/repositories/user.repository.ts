import { IUser } from "../interfaces/user.interface";
import { read, write } from "../services/fs.servises";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await read();
  }

  public async create(dto: Partial<IUser>): Promise<IUser> {
    const users = await read();
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: dto.name,
      email: dto.email,
      password: dto.password,
    };
    users.push(newUser);
    await write(users);
    return newUser;
  }

  public async delete(userId: number): Promise<void> {
    const users = await read();
    const findUserId = users.findIndex((user) => user.id !== Number(userId));
    users.splice(findUserId, 1);
    await write(users);
  }

  public async getUserById(userId: number): Promise<IUser> {
    const users = await read();
    return users.find((user) => user.id === Number(userId));
  }

  public async updateUser(userId: number, dto: IUser): Promise<IUser> {
    const users = await read();
    const findUserId = users.findIndex((user) => user.id === Number(userId));
    const user = users[findUserId];
    user.name = dto.name;
    user.email = dto.email;
    user.password = dto.password;
    await write(users);
    return user;
  }
}

export const userRepository = new UserRepository();
