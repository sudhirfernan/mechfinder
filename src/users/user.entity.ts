import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
// users/user.entity.ts
export enum Role { DRIVER = 'driver', MECHANIC = 'mechanic', SERVICE_CENTER = 'service_center', ADMIN = 'admin' }

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') id!: string;
  @Column({ unique: true }) email!: string;
  @Column() passwordHash!: string;
  @Column({ type: 'enum', enum: Role }) role!: Role;
  @Column({ default: true }) isActive!: boolean;
  @CreateDateColumn() createdAt!: Date;
}