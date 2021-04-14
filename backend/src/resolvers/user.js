function accounts(parent, args, context) {
   return context.prisma.user
      .findUnique({ where: { id: parent.id } })
      .accounts();
}
module.exports = {
   accounts,
};
