import { Controller, Get } from '@nestjs/common';
import {HelloWorldService} from "./hello-world.service";

@Controller('hello-world')
export class HelloWorldController {
    constructor(private readonly appService: HelloWorldService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
