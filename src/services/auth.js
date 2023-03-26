const Users = require("../database/models/users");
const {hash, compare} = require("../utils/hash");
const {generateAccessToken} = require("../utils/jwt");

const signup = async ({name, email, password}) => {
    const hashedPassword = await hash(password);
    const user = await Users.create({
        name,
        email,
        password: hashedPassword,
    });
    const accessToken = generateAccessToken({id: user.id});
    return {user, accessToken};
};

const login = async ({email, password}) => {
    const user = await Users.findOne({where: {email}});
    if (!user) {
        return {};
    }

    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
        return {};
    }

    const accessToken = generateAccessToken({id: user.id});
    return {user, accessToken};
};

module.exports = {
    signup,
    login,
}