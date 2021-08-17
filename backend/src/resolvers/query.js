const jwt = require("jsonwebtoken");
const { getUserId } = require("../utils.js");

async function me(parent, args, context, info) {
   console.log("me ");
   return await context.prisma.user.findUnique({
      where: {
         id: 2,
      },
   });
}
async function checkToken(parent, args, context, info) {
   console.log("backend checking");
   const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyOTIxNDczOX0.qqhT-_8eo9ZEOevubnoXMiTsn-a_4zvikn6ZVUmkfSs";
   const userId = getUserId(token);
   console.log("userıd", userId);

   return await context.prisma.user.findUnique({
      where: {
         id: userId,
      },
   });
}
async function users(parent, args, context, info) {
   return await context.prisma.user.findMany();
}

async function user(parent, args, context, info) {
   return await context.prisma.user.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function accounts(parent, args, context, info) {
   return await context.prisma.account.findMany();
}

async function account(parent, args, context, info) {
   return await context.prisma.account.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function cards(parent, args, context, info) {
   return await context.prisma.card.findMany();
}

async function card(parent, args, context, info) {
   return await context.prisma.card.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}
async function transactions(parent, args, context, info) {
   return await context.prisma.transaction.findMany();
}

async function transaction(parent, args, context, info) {
   return await context.prisma.transaction.findUnique({
      where: {
         id: parseInt(args.id),
      },
   });
}

//
async function getLast10Transactions(parent, args, context, info) {
   const asSender = await context.prisma.transaction.findMany({
      where: {
         senderId: 1,
      },
      take: 10,
   });
   const asReceiver = await context.prisma.transaction.findMany({
      where: {
         receiverId: 1,
      },
      take: 10,
   });
   const x = asSender.concat(asReceiver);
   x.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));

   const c = x.slice(0, 10);

   return c;
}

module.exports = {
   me,
   users,
   user,
   accounts,
   account,
   card,
   cards,
   transactions,
   transaction,
   //
   getLast10Transactions,
   checkToken,
};
