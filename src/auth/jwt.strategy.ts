import { ExtractJwt, Strategy } from "passport-jwt"
import { PassportStrategy } from '@nestjs/passport'
import { jwtConstants } from "./contants"
import { Injectable } from "@nestjs/common"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: any) {
    return { sub: payload.id, ...payload }
  }
}