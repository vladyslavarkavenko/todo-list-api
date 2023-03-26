const jwt = require("jsonwebtoken");
const {JWT_SECRET, JWT_EXPIRES_IN} = require("../config");

const generateAccessToken = ({id}) => {
    return jwt.sign(
        {id},
        JWT_SECRET,
        {expiresIn: JWT_EXPIRES_IN}
    );
}

const verifyAccessToken = (token) => {
    return jwt.verify(
        token,
        JWT_SECRET
    );
}

module.exports = {
    generateAccessToken,
    verifyAccessToken
}