import { UserStatus } from "generated/prisma/enums";

export type RequestUser = {
    id: string;
    name: string;
    status: UserStatus
};
