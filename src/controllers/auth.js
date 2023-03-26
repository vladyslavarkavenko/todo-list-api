const {login, signup} = require("../services/auth");
const {wrapHandler} = require("../helpers/wrapHandler");

const postLogin = wrapHandler(async (req, res) => {
    const {email, password} = req.body;

    const {user, accessToken} = await login({email, password});
    if (!user) {
        res.status(403).send("Invalid credentials");
    } else {
        res.status(200).json({user, accessToken});
    }
})

const postSignup = wrapHandler(async (req, res) => {
    const {name, email, password} = req.body;

    const {user, accessToken} = await signup({name, email, password});
    res.status(201).json({user, accessToken});
})

module.exports = {
    postLogin,
    postSignup,
}