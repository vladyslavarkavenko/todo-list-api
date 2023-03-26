const wrapHandler = (handler) => {
    return async (req, res) => {
        try {
            await handler(req, res);
        } catch (error) {
            console.error(error);
            if (error.errors?.[0]?.origin === "DB") {
                res.status(422).send("Invalid data")
            } else {
                res.status(500).send("Server error")
            }
        }
    }
}

module.exports = {wrapHandler}