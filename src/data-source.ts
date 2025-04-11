import { DataSource } from "typeorm";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
import { Album } from "./entities/Album";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "photo_album",
    dropSchema: true,
    synchronize: true,
    //logging: true,
    entities: [Photo, User, Album],
    subscribers: [],
    migrations: []
});