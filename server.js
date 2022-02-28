const express = require('express')
const app = express()
const {graphqlHTTP} =  require('express-graphql')
const schema = require('./schemas/schema')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
app.use(cors())
const db = process.env.MONGO_URL || 'mongodb://localhost:27017/serverTest'
mongoose.connect(db).then(console.log(`Conection to db is open`)).catch(err=> console.log(err))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))





const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server is operational on port: ${port}`);
})