const {verifyAccessToken} = require("../utils/jwt");

const requiredAuth = (req, res, next) => {
    try {
        const accessTokenHeader = req.header("Authorization");
        if (!accessTokenHeader) {
            return res.status(401).send("Access denied");
        }

        const accessToken = accessTokenHeader.split(' ')[1];
        if (!accessToken) {
            return res.status(401).send("Access denied");
        }

        req.user = verifyAccessToken(accessToken);
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).send("Invalid token");
    }
}

module.exports = {
    requiredAuth
};