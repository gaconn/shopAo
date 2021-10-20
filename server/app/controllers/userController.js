const userModel = require("../models/modelUser");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();
class userController {
    //
    async getUser(req, res, next) {
        const data = { ...req.body };
        if (!data.userName || !data.password) {
            return res.status(400).json({
                success: false,
                message: "missing username or password !"
            });
        }

        try {
            const user = await userModel.findOne({ userName: data.userName });
            if (!user)
                return res.status(404).json({
                    success: false,
                    message: "username or password is incorrect!"
                });
            const validatorPassword = await argon2.verify(
                user.password,
                data.password
            );
            if (!validatorPassword)
                return res.status(400).json({
                    success: false,
                    message: "username or password is incorrect"
                });
            const accesstoken = jwt.sign(
                { id: user._id },
                process.env.SECRET_TOKEN
            );
            res.json({
                success: true,
                message: "login successful!",
                accesstoken: accesstoken
            });
        } catch (error) {
            res.send(error);
        }
    }
    async createUser(req, res, next) {
        const data = { ...req.body };
        if (!data.userName || !data.password) {
            return res.status(400).json({
                success: false,
                message: "missing username or password !"
            });
        }
        try {
            const user = await userModel.findOne({ userName: data.userName });
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: "username already existing!"
                });
            }
            //all good
            const hashedPassword = await argon2.hash(data.password);
            const newUser = new userModel({
                ...data,
                password: hashedPassword
            });
            newUser.save((err) => {
                if (err) console.log("save fail!");
            });
            const accessToken = jwt.sign(
                { id: newUser._id },
                process.env.SECRET_TOKEN
            );
            res.json({
                success: true,
                message: "create account successfully !",
                accessToken: accessToken
            });
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = new userController();
