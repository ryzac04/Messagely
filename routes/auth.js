/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const ExpressError = require("../expressError");
const User = require("../models/user");


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post('/', async (req, res, next) => {
    try {
        let user = await User.register(req.body);
        return res.json({ user });
    } catch (err) {
        return next(err);
    }
})

module.exports = router;
