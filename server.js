const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
  schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));