const { PrismaClient } = require("@prisma/client");
const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { getUserId } = require("./utils");

const Query = require("./resolvers/query.js");
const Mutation = require("./resolvers/mutation.js");
const User = require("./resolvers/user.js");
const Account = require("./resolvers/account.js");
const Card = require("./resolvers/card.js");
const Transaction = require("./resolvers/transaction.js");

const resolvers = {
   Query,
   Mutation,
   User,
   Account,
   Card,
   Transaction,
};
const prisma = new PrismaClient();

const server = new ApolloServer({
   typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
   resolvers,
   context: ({ req }) => {
      return {
         ...req,
         prisma,
         userId: req && req.headers.authorization ? getUserId(req) : null,
      };
   },
}).listen({ port: 4000 }, () =>
   console.log(`Server up at: http://localhost:4000 `)
);
