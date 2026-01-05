import { UserStatus } from "generated/prisma/enums";

export type JwtPayload = {
    sub: string;
    username: string;
    status: UserStatus
}