const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
};

const MessageScheme = new Schema({
  user: reqString,
  text: reqString,
  date: reqString,
});

const ArrayOfMessagesScheme = new Schema({
  chatName: reqString,
  messages: [MessageScheme],
});

const Message = mongoose.model("Message", MessageScheme);
const ArrayOfMessages = mongoose.model(
  "ArrayOfMessages",
  ArrayOfMessagesScheme
);

module.exports = { Message, ArrayOfMessages };
