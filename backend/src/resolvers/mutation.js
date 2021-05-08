const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
   const password = await bcrypt.hash(args.password, 10);

   const user = await context.prisma.user.create({
      data: { ...args, password },
   });

   const token = jwt.sign({ userId: user.id }, APP_SECRET);

   return {
      token,
      user,
   };
}

async function login(parent, args, context, info) {
   // 1
   const user = await context.prisma.user.findUnique({
      where: { email: args.email },
   });
   if (!user) {
      throw new Error("No such user found");
   }

   // 2
   const valid = await bcrypt.compare(args.password, user.password);
   if (!valid) {
      throw new Error("Invalid password");
   }

   const token = jwt.sign({ userId: user.id }, APP_SECRET);

   // 3
   return {
      token,
      user,
   };
}
async function updateUser(parent, args, context, info) {
   const updateUser = await context.prisma.user.update({
      where: {
         id: parseInt(args.id),
      },
      data: {
         email: args.email,
         name: args.name,
      },
   });
   return updateUser;
}

async function deleteUser(parent, args, context, info) {
   const deleteUser = await context.prisma.user.delete({
      where: {
         id: parseInt(args.id),
      },
   });
   return deleteUser;
}
//account
async function createAccount(parent, args, context, info) {
   const { userId } = context;

   return await context.prisma.account.create({
      data: {
         user: { connect: { id: userId } },
      },
   });
}
async function updateAccount(parent, args, context, info) {
   return await context.prisma.account.update({
      where: {
         id: parseInt(args.accountId),
      },
      data: {
         iban: args.iban,
         balance: args.balance,
      },
   });
}
//transaction
async function createTransaction(parent, args, context, info) {
   const { userId } = context;

   //sender
   const sender = await context.prisma.account.findUnique({
      where: {
         id: userId,
      },
      select: {
         balance: true,
      },
   });
   const senderBalance = await context.prisma.account.update({
      where: {
         id: parseInt(args.senderId),
      },
      data: {
         balance: sender.balance - args.amount,
      },
      select: {
         balance: true,
      },
   });
   //receiver
   const receiver = await context.prisma.account.findUnique({
      where: {
         id: parseInt(args.receiverId),
      },
      select: {
         balance: true,
      },
   });
   const receiverBalance = await context.prisma.account.update({
      where: {
         id: parseInt(args.receiverId),
      },
      data: {
         balance: sender.balance + args.amount,
      },
      select: {
         balance: true,
      },
   });
   return await context.prisma.transaction.create({
      data: {
         sender: { connect: { id: parseInt(args.senderId) } },
         newSenderBalance: senderBalance.balance,
         receiver: { connect: { id: parseInt(args.receiverId) } },
         newReceiverBalance: receiverBalance.balance,
         amount: args.amount,
      },
   });
}
async function deleteTransaction(parent, args, context, info) {
   return await context.prisma.transaction.delete({
      where: {
         id: parseInt(args.id),
      },
   });
}
//card
async function createCard(parent, args, context, info) {
   return await context.prisma.card.create({
      data: {
         account: { connect: { id: parseInt(args.accountId) } },
      },
   });
}
async function updateCardPermissions(parent, args, context, info) {
   return await context.prisma.card.update({
      where: {
         id: parseInt(args.cardId),
      },
      data: {
         atmdomestic: args.atmdomestic,
         atmabroad: args.atmabroad,
         shopppingdomestic: args.shopppingdomestic,
         shoppingabroad: args.shoppingabroad,
         ecommercedomestic: args.ecommercedomestic,
         ecommerceabroad: args.ecommerceabroad,
      },
   });
}

module.exports = {
   signup,
   login,
   updateUser,
   deleteUser,
   //account
   createAccount,
   updateAccount,
   //transaction
   createTransaction,
   deleteTransaction,
   //card
   createCard,
   updateCardPermissions,
};
