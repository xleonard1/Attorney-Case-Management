const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ exteended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

// create a new instance of the apollo server with the graphql schema

const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});

    db.once('open', () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
}

startApolloServer(typeDefs, resolvers);