import usersModel from "./users-model.js";

export const findAllUsers = async () => {
    const users = await usersModel.find();
    return users;
};

// use find function to do the filter
export const findAllAdmin = async () => {
    const users = await usersModel.find({ role: "ADMIN" });
    return users;
};

export const findAllByRole = async (role) => {
    const users = await usersModel.find({ role });
    return users;
};

export const findUserById = async (id) => {
    const user = await usersModel.findById(id);
    return user;
};

export const findUserByUsername = async (username) => {
    const user = await usersModel.findOne({ username });
    return user;
};

export const findUserByCredentials = async (username, password) => {
    const user = await usersModel.findOne({ username, password });
    return user;
};

export const deleteUser = async (id) => {
    const status = await usersModel.deleteOne({ _id: id });
    return status;
};

export const createUser = async (user) => {
    const newUser = await usersModel.create(user);
    return newUser;
};


// find the user by id and update the user
export const updateUser = async (user) => {
    const status = await usersModel.updateOne(user);
    return status;
};