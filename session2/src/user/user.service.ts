import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo) {}

  create(user) {
    const newUser = this.userRepo.create(user)

    return this.userRepo.save(newUser);
  }

  getUser({ id }) {
    return this.userRepo.findOneBy({ id });
  }

  updateUser({ id }, user) {
    return this.userRepo.update(id, user);
  }

  deleteUser({ id }) {
    return this.userRepo.delete(id);
  }
}
