import { User } from "@/src/entities/user";
import { UserRepository } from "@/src/repository/interface/user";

export class UserRepositoryPrisma implements UserRepository {
    create(user: User): void {
        throw new Error("Method not implemented.");
    }
    update(user: User): void {
        throw new Error("Method not implemented.");
    }
    find(params: { id: string; username: string; }): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
}