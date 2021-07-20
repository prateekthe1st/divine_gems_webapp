const jwt = require('jsonwebtoken');

function authToken (req, res, next) {
    const token = req.cookies.token;
    if (token === '' || token === null) {
        //Send code for no token
    } else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                //Send code for invalid token
            } else {
                req.user = user;
                next();
            }
        })
    }
}

module.exports = authToken;