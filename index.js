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
    const { name, password } = req.body

    res.status(200).json({
        "name is": name,
        "password is": password
    })
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, _) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})

