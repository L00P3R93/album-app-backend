import { DataSource } from "typeorm";
import { Photo } from "./entities/Photo";
import { User } from "./entities/User";
import { Album } from "./entities/Album";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true, // Consider false for production + use migrations
    dropSchema: false, // Avoid dropping DB in production!
    ssl: {
        rejectUnauthorized: false, // Required for Heroku's self-signed certs
    },
    entities: [Photo, User, Album],
    subscribers: [],
    migrations: [],
});