require("dotenv").config()
const bcrypt = require("bcryptjs")
const Appointment = require("../model/appointmentSchema")
const User = require("../model/userSchema")
const db = require("../model/config")

const people = [
    {
        name: "Bob Fisher",
        email: "bobfisher@mail.com",
        password: "12345",
        isAdmin: true,
    },
    {
        name: "Mike Thomas",
        email: "t@m.com",
        password: "12345",
        isAdmin: true,
    },
    {
        name: "John trash",
        email: "j@m.com",
        password: "12345",
        isAdmin: false,
    },
]

const clearDb = async () => {
    try {
        await User.deleteMany()
        await Appointment.deleteMany()
    } catch (error) {
        console.error(error)
    }
}

module.exports = { clearDb }

const seedData = async () => {
    try {
        await db()

        await clearDb()

        const salt = await bcrypt.genSalt(10)

        await Promise.all(
            people.map(async (person) => {
                person.password = await bcrypt.hash(person.password, salt)
                await User.create(person)
            })
        )
    } catch (error) {
        console.error(error)
    } finally {
        process.exit()
    }
}

seedData()
