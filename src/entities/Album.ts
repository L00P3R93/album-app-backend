import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Photo } from './Photo';

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 255 })
    title!: string;

    @ManyToOne(() => User, (user) => user.albums)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Column('integer')
    user_id!: number;

    @OneToOne(() => Photo, (photo) => photo.album, { cascade: true })
    @JoinColumn({ name: 'photo_id' })
    photo!: Photo;

    @Column('integer', { nullable: true })
    photo_id!: number;
}