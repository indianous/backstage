type UserParams = {
    username: string;
    email: string;
}

export class User {
    readonly id: string;
    readonly username: string;
    readonly email: string;

    constructor(params: UserParams, id?: string) {
        this.id = id ? id : '';
        this.username = params.username
        this.email = params.email
    }
}