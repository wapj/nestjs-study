import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "하이~";
  }

  @Get("/bye")
  getBye() {
    return "바이~";
  }
}
