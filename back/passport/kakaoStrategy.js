const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const {User} = require('../models');
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_API_KEY,
        callbackURL: 'http://localhost:3065/kakao/oauth',
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            if (profile._json.kakao_account.email === undefined){
                done("error","error")
            }else {
                const exUser = await User.findOne({
                    where: { email: profile._json.kakao_account.email},
                })
                if (exUser) {
                    done(null, exUser)
                } else {
                    const newUser = await User.create({
                        email: profile._json && profile._json.kakao_account.email,
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
