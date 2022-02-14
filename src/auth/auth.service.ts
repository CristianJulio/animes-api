import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";
import { IUser } from 'src/users/interfaces';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersSerive: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.usersSerive.findOneByUsername(username)

    if (user && (bcrypt.compareSync(password, user.password))) {
      const { password, ...rest } = user
      return rest
    }

    return null
  }

  login(user: IUser) {
    const payload = { ...user, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}