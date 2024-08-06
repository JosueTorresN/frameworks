const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: String,
    text: String,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
