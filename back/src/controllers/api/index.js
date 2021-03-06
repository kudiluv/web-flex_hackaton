const router = require("express").Router();
const roles = require("../../consts/roles")
const passport = require("passport")
const passportCheckRole = require("../../middlewares/passportCheckRole")

router.use('/check', require('./check'));
router.use('/auth', require('./auth'));
router.use('/teacher',
    passport.authenticate('jwt', {session: false}),
    passportCheckRole(roles.TEACHER), 
    require('./teacher')
)
router.use('/lectures', passport.authenticate('jwt', {session: false}), require('./lectures'))
router.use('/users', passport.authenticate('jwt', {session: false}),
    passportCheckRole(roles.ADMIN), 
    require('./users')
)

module.exports = router