import * as jwt from "jsonwebtoken";

import { configure } from "../configs/config";
import { TokenEnum } from "../enums/token.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(payload: ITokenPayload): ITokenPair {
    const accessToken = jwt.sign(payload, configure.jwtAccessSecret, {
      expiresIn: configure.jwtAccessExpiresIn,
    });
    const refreshToken = jwt.sign(payload, configure.jwtRefreshSecret, {
      expiresIn: configure.jwtRefreshExpiresIn,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  public verifyToken(token: string, type: TokenEnum): ITokenPayload {
    try {
      let secret: string;
      switch (type) {
        case "access":
          secret = configure.jwtAccessSecret;
          break;
        case "refresh":
          secret = configure.jwtRefreshSecret;
          break;
        default:
          throw new ApiError("Invalid token type", 401);
      }
      return jwt.verify(token, secret) as ITokenPayload;
    } catch (e) {
      throw new ApiError("Invalid token", 401);
    }
  }
}
export const tokenService = new TokenService();
