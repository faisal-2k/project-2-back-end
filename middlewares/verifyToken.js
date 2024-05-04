
const jwt = require('jsonwebtoken');
require("dotenv").config();

async function verifyUserToken(req, res, next) {
    try {
        const authenticator = req.headers.authenticator;
        if (!authenticator) {
            return res.status(401).send({ message: "Unauthorized" });
        }
        
        const [prefix, token] = authenticator.split(" ");
        if (prefix !== 'Bearer' || !token) {
            return res.status(401).send({ message: "Invalid token format" });
        }
        
        if(process.env.ACCESS_TOKEN_SECRET == token){
            next();
        } else {
            return res.status(403).send({ message: "Forbidden access" });
        }
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(500).send({ message: "Internal server error" });
    }
}    

const setToken = (req, res) => {
    res.status(200).send({token : process.env.ACCESS_TOKEN_SECRET});
}
module.exports = { verifyUserToken, setToken };
