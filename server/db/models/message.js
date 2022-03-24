const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const NewMessage = db.define("message", {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senderId: {
      type: Sequelize.INTEGER, // Or guid string
      allowNull: false
    },
    conversationId: {
      type: Sequelize.INTEGER, // or guid,
      allowNull: false
    },
    viewedBy: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull:true,
    }
})
module.exports = Message;
