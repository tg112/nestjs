import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
	@Get("/hoge")
	getRootRoute() {
		return "Hi there"
	}

	@Get("/fuga")
	getByeText() {
		return "bye"
	}
}
