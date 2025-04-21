import {db} from "../index.ts";

const isDuaplicate = async (firstName: string, lastName: string) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    })
    return user;
}

const createUser = async (firstName: string, lastName: string) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    })
    return user;
}

const getUser = async () => {
    const user = await db.user.findMany({
    });
    return user;
}

const updateFLName = async (id: number, firstName: string, lastName: string) => {
    const user = await db.user.update({
        where: {
            id: id,
        },
        data: {
            firstName: firstName,
            lastName: lastName,

        }
    })
    return user;
}
export {isDuaplicate, createUser, getUser, updateFLName};