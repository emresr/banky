async function me(parent, args, context, info) {
   const { userId } = context;

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
};
