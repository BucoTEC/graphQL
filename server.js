const express = require('express')
const app = express()
const {graphqlHTTP} =  require('express-graphql')
const schema = require('./schemas/schema')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))





const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server is operational on port: ${port}`);
})