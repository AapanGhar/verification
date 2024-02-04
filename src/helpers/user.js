


const createDbObject = (data) => {
    return {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}


export const USER_HELPER = { createDbObject }