const users =[];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    
    const existingUser = users.find((user) => {user.name === name});

    if (existingUser) {
        return { error: "UserName is already Taken"};
    }

    const user = {id , name, room};

    users.push(user);
    console.log(users, "From helper")
    return {user};
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

module.exports = {addUser, removeUser, users, getUser};
