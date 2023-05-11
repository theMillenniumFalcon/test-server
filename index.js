import express from 'express'
import cors from 'cors'

const PORT = 8000

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is working!')
})

app.post('/', (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(401).json({
                type: "error",
                message: "Invalid or No Credentials",
            });
        }

        res.status(200).json({
            type: "success",
            message: "Logged in successfully",
        })
    } catch (error) {
        res.json({
            type: "error",
            message: error.message,
        })
    }
})

app.post('/signup', (req, res) => {
    try {
        const { name, email, password, age, weight } = req.body

        if (!name || !email || !password || !age || !weight) {
            return res.status(401).json({
                type: "error",
                message: "Invalid or No Credentials",
            });
        }

        res.status(200).json({
            type: "success",
            message: "Logged in successfully",
        })
    } catch (error) {
        res.json({
            type: "error",
            message: error.message,
        })
    }
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, _) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})

