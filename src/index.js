const http = require('http')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9090
const modules = require('./modules')



const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
})

server.applyMiddleware({ app })

const httpServer = http.createServer(app)

httpServer.listen(PORT, () => console.log(PORT + server.graphqlPath))