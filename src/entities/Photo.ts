import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { Album } from "./Album";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    title!: string;

    @Column('text')
    url!: string;

    @OneToOne(() => Album, (album) => album.photo)
    @JoinColumn({ name: 'album_id' })
    album!: Album;
}
