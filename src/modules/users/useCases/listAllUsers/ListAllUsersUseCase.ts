import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isUserAdmin = this.usersRepository.findById(user_id).admin;

    if (isUserAdmin) {
      const users = this.usersRepository.list();
      return users;
    }

    throw new Error("You don't have permission to list all users.");
    
  }
}

export { ListAllUsersUseCase };
