require("dotenv").config()
const express = require("express")
const cors = require("cors")
const path = require("path")
const userRoute = require("./routes/userRoute")
const appointmentRoute = require("./routes/appointmentRoute")

const db = require("./model/config")

const app = express()

db()

app.use(express.json())
app.use(cors())

app.use("/api/user", userRoute)
app.use("/api/appointment", appointmentRoute)

// const filePath = path.join(__dirname, "..", "frontend", "build")

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")))

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "frontend", "build", "index.html")
        )
    })
}

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`app is listening on ${PORT}`))
