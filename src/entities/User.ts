import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Album } from './Album';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    name!: string;

    @Column('varchar', { length: 50, unique: true })
    username!: string;

    @Column('varchar', { length: 100, unique: true })
    email!: string;

    @OneToMany(() => Album, (album) => album.user)
    albums!: Album[];
}