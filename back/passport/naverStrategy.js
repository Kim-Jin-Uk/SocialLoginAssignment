const passport = require('passport');
const NaverStrategy = require('passport-naver-v2').Strategy;
const {User} = require('../models');
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    passport.use(new NaverStrategy({
        clientID: process.env.NAVER_API_KEY,
        clientSecret:process.env.NAVER_API_SECRET_KEY,
        callbackURL: 'http://localhost:3065/naver/oauth',
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            if (profile.email === undefined){
                done("error","error")
            }else {
                const exUser = await User.findOne({
                    where: { email: profile.email},
                })
                if (exUser) {
                    done(null, exUser)
                } else {
                    const newUser = await User.create({
                        email: profile.email
                    })
                    done(null, newUser)
                }
            }
        } catch(error) {
            console.error(error)
            done(error)
        }
    }))
}
