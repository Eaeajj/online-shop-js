require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 5000
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//Error handling
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: "Workin'"})
})

app.listen(PORT, () => console.log(`Example app listening on ${PORT} port!`)) 


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error)
    }
}


start() 


