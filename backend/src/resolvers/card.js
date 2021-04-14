function account(parent, args, context) {
   return context.prisma.card
      .findUnique({ where: { id: parent.id } })
      .account();
}

module.exports = {
   account,
};
