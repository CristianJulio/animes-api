import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { Public } from "src/utils/decorators/public.decorator";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() req) {
    return this.authService.login(req.user)
  }
}