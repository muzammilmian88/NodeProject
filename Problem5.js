//Authentication

require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;
const PORT = process.env.PORT || 3000;

const app = express();
app.get("/", (req, resp) => {
    resp.json({
        message: "Api is running"
    })
})

app.post("/login", (req, resp) => {
    const user = {
        id: 1,
        name: "muzammil",
        email: "muzammil@gmail.com"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (error, token) => {
        resp.json({
            token
        })
    })
})

app.post("/profile", verifyToken, (req, resp) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            resp.send({ result: "Invalid token" })
        } else {
            resp.json({
                message: "Profile accessed",
                authData
            })
        }
    })
})

function verifyToken(req, resp, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== undefined) {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        resp.send("Token is Not valid");
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
