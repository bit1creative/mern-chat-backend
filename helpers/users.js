const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  users.find((user) => user.room === room && user.name === name);

  if (users.find((user) => user.room === room && user.name === name)) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room };

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id == id);

const getUserInRoom = (room) => users.filter((user) => user.room === room);

const getUsers = () => users;

module.exports = { getUsers, addUser, removeUser, getUserInRoom, getUser };
