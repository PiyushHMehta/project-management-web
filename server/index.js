const express = require('express')
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/Schema')
const connectDB = require('./config/db')
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use(cors())

// connect to db
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port)