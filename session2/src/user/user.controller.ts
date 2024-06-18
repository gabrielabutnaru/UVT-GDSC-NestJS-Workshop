import {Body, Controller, Delete, Get, HttpException, Param, Patch, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {NotFoundError} from "rxjs";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user) {
    return await this.userService.create(user);
  }

  @Get(":id")
  async getUser(@Param() id) {
    const possibleUser = await this.userService.getUser(id);

    if (!possibleUser) {
      throw new HttpException("User not found", 404);
    }

    return possibleUser;
  }

  @Patch(":id")
  async updateUser(@Param() id, @Body() user) {
    return await this.userService.updateUser(id, user);
  }

  @Delete(":id")
  async deleteUser(@Param() id) {
    return await this.userService.deleteUser(id);
  }
}
