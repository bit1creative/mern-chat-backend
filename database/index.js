const mongoose = require("mongoose");
const { Message, Chat } = require("../database/schemes/MessagesScheme");

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
  if (await Chat?.exists({ chatName })) {
    await Chat.findOneAndUpdate({ chatName }, { $push: { messages: msg } });
    await Chat.find({ chatName }, function (err, messages) {
      if (err) return console.error(err);
    });
  } else {
    const newChat = new Chat({
      chatName,
      messages: [msg],
    });
    newChat.save();
  }
};

const findChatMessages = async (chatName) => {
  if (await Chat?.exists({ chatName })) {
    const msgs = await Chat.find({ chatName });
    return msgs[0].messages;
  } else return false;
};

module.exports = { saveMessage, findChatMessages };
