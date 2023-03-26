const bcrypt = require("bcrypt");

const hash = (data) => {
    return bcrypt.hash(data, 10);
}

const compare = (data, hash) => {
    return bcrypt.compare(data, hash);
}

module.exports = {
    hash,
    compare
};