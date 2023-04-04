const mongoose = require("mongoose")
const db = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`db connect on ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = db
