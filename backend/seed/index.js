import Appointment from "../model/appointmentSchema"
import User from "../model/userSchema"

const users = [
    {
        name: "Barr. Bob Fisher",
        email: "bobfisher@mail.com",
        password: "12345",
        isAdmin: true,
    },
    {
        name: "Esq. Mike Thomas",
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

export const clearDb = async () => {
    try {
        await User.deleteMany()
        await Appointment.deleteMany()
    } catch (error) {
        console.error(error)
    }
}

const seedData = async () => {
    try {
        await clearDb()

        const salt = await bcrypt.genSalt(10)

        await Promise.all(
            users.map(async (user) => {
                user.password = await bcrypt.hash(password, salt)
                User.create(user)
            })
        )
    } catch (error) {
        console.error(error)
    } finally {
        process.exit()
    }
}

seedData()
