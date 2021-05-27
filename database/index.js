const mongoose = require("mongoose");
const {
  Message,
  ArrayOfMessages,
} = require("../database/schemes/MessagesScheme");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We good");
});

const saveMessage = async (chatName, user, text, date) => {
  const msg = new Message({ user, text, date });
  if (await ArrayOfMessages.exists({ chatName })) {
    await ArrayOfMessages.findOneAndUpdate(
      { chatName },
      { $push: { messages: msg } }
    );
    await ArrayOfMessages.find({ chatName }, function (err, messages) {
      if (err) return console.error(err);
      //   console.log(messages);
    });
    // console.log("Found one");
  } else {
    const ArrayOfMsgs = new ArrayOfMessages({
      chatName,
      messages: [msg],
    });
    ArrayOfMsgs.save();
    // console.log("Didn't find one");
  }
};

const findChatMessages = async (chatName) => {
  if (await ArrayOfMessages.exists({ chatName })) {
    const msgs = await ArrayOfMessages.find({ chatName });
    return msgs[0].messages;
  } else return false;
};

module.exports = { saveMessage, findChatMessages };
