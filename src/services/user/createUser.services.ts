import { Repository } from "typeorm";
import { User } from "../../entitites/user.entity";
import AppDataSource from "../../data-source";

const createUserService = async (userData) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user = userRepository.create(userData);
  await userRepository.save(user);
  return user;
};

export default createUserService;
