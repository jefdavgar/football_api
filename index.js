require('dotenv').config()
const epxress = require('express')
const cors = require('cors')
const {swaggerDocs: V1SwaggerDocs} = require("./src/swagger")
const app = epxress()

const { dbConnect } = require('./src/config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(epxress.json())

app.use('/v1/api', require('./src/routes'))

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
    V1SwaggerDocs(app, PORT);
})
