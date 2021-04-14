function user(parent, args, context) {
   return context.prisma.account
      .findUnique({ where: { id: parent.id } })
      .user();
}
function sended(parent, args, context) {
   return context.prisma.account
      .findUnique({ where: { id: parent.id } })
      .sended();
}
function received(parent, args, context) {
   return context.prisma.account
      .findUnique({ where: { id: parent.id } })
      .received();
}
function cards(parent, args, context) {
   return context.prisma.account
      .findUnique({ where: { id: parent.id } })
      .cards();
}
module.exports = {
   user,
   sended,
   received,
   cards,
};
