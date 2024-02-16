import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { User } from "./entitites/user.entity";
import { Movie } from "./entitites/movie.entity";
import { InitialMigration1708087622111 } from "./migrations/1708087622111-InitialMigration";

const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [User, Movie],
      migrations: [InitialMigration1708087622111],
    };
  }

  if (nodeEnv === "tests") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Movie],
    };
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: false,
    entities: [User, Movie],
    migrations: [InitialMigration1708087622111],
  };
};

const configDb = setDataSourceConfig();

const AppDataSource = new DataSource(configDb);

export default AppDataSource;
