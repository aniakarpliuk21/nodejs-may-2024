import { ApiError } from "../errors/api-error";
import { IUser, IUserCreateDto } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";
import { userService } from "./user.service";

class AuthService {
  public async signUp(dto: IUserCreateDto): Promise<IUser> {
    await userService.isEmailUnique(dto.email);
    const password = await passwordService.hashPassword(dto.password);
    return await userRepository.create({ ...dto, password });
  }

  public async signIn(dto: any): Promise<any> {
    const user = await userRepository.getByEmail(dto.email);
    const isPasswordCorrect = await passwordService.comparePassword(
      dto.password,
      user.password,
    );
    if (!isPasswordCorrect) {
      throw new ApiError("Incorrect email or password", 401);
    }
    const tokens = tokenService.generateTokens({ userId: user._id });
    await tokenRepository.create({ ...tokens, _userId: user._id });
    return tokens;
  }
}
export const authService = new AuthService();
