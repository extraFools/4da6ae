const { Op, Sequelize } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {
  conversationTitle: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

//Find conversation given conversation Id 
Conversation.findConversation = async function (converationId) {
  const conversation = await Conversation.findConversation({
    where:{
      id: converationId
    }
  });
  return conversation;
}

// find conversation given two user Ids

// Conversation.findConversation = async function (user1Id, user2Id) {
//   const conversation = await Conversation.findOne({
//     where: {
//       user1Id: {
//         [Op.or]: [user1Id, user2Id]
//       },
//       user2Id: {
//         [Op.or]: [user1Id, user2Id]
//       }
//     }
//   });

//   // return conversation or null if it doesn't exist
//   return conversation;
// };

module.exports = Conversation;
