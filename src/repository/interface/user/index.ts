import { User } from "@/src/entities/user";

export interface UserRepository {
    create(user: User): void
    update(user: User): void
    find(params: { id: string, username: string }): User
    delete(id: string): void
}