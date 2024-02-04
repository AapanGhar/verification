

const currentDbName = () => {
    let date = new Date()
    // console.log(typeof date.getMonth())
    let currentMonth = String(date.getMonth() + 1).length === 1 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1)
    let currentDate = date.getDate().length == 1 ? '0' + date.getDate() : date.getDate()
    return 'helo-whatsapp'
    // return `whatsapp-${date.getFullYear()}-${currentMonth}-${currentDate}`
}


class MongoClass {
    constructor(CONNECTION) {
        this.collection;
        this.connection = CONNECTION
        this.db;
    }

    async mongoInsertOne(database, model, data) {
        let db = this.connection.db(database)
        let collection = db.collection(model)
        return await collection.insertOne(data)
    }

    async mongoFindOne(database, model, filter) {
        let db = this.connection.db(database)
        let collection = db.collection(model)
        return await collection.findOne(filter)
    }

    async mongoFind(database, model, page, limit) {
        let db = this.connection.db(database)
        let collection = db.collection(model)
        return await collection.find({}).sort({ RollNumber: 1 }).limit(limit).skip((page - 1) * limit).toArray()
    }

    async mongoDocumentCount(database, model) {
        let db = this.connection.db(database)
        let collection = db.collection(model)
        return await collection.countDocuments()
    }

    async mongoFindOneAndUpdate(database, model, filter, data) {
        let db = this.connection.db(database)
        let collection = db.collection(model)
        console.log('filter', filter, 'data', data)
        return await collection.findOneAndUpdate({RollNumber: filter }, { $set: data }, { returnNewDocument: true })
    }

}


6299682273    // 

export const MONGO_MODEL = { MongoClass, currentDbName }

// let res = await MONGO_MODEL.mongoInsertOne(currentDbName(), 'user', { name: "saif", age: 23 })
// console.log("🚀 ~ file: Mongodb.js:35 ~ re̥s:", res)
// console.log('db', currentDbName())
