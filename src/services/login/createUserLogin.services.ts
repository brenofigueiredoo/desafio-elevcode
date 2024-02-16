import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import AppError from "../../errors/app.errors";
import { User } from "../../entitites/user.entity";
import AppDataSource from "../../data-source";

const createUserLoginService = async (loginData): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, String(process.env.SECRET_KEY!), {
    expiresIn: "24h",
    subject: String(user.id),
  });

  return token;
};

export default createUserLoginService;
