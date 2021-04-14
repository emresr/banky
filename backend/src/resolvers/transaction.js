function sender(parent, args, context) {
   return context.prisma.transaction
      .findUnique({ where: { id: parent.id } })
      .sender();
}
function receiver(parent, args, context) {
   return context.prisma.transaction
      .findUnique({ where: { id: parent.id } })
      .receiver();
}
module.exports = {
   sender,
   receiver,
};
