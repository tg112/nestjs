import { Controller, Get } from "@nestjs/common";

// 共通のパスを定義できる
@Controller('/app')
export class AppController {
  @Get('/main') // /app/main
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye') // /app/bye
  getByeRoute() {
    return 'bye bye'
  }
}