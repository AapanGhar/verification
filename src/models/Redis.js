


class RedisClass {
    constructor (CONNECTION) {
        this.connection = CONNECTION

    }

    async redisSetKey (key, value) {
        let result = await this.connection.set(key, value)
        return result

    }

    async redisGetKey (key) {
        return await this.connection.get(key)
    }
}

export const REDIS_MODEL = { RedisClass }