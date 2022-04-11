const express = require('express')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const db = require('./models')
const cors = require('cors')
const passport = require('passport')
const passportConfig = require('./passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const hpp = require('hpp')
const helmet = require('helmet')
const bodyParser = require("express")
const {User} = require("./models")
dotenv.config()

const app = express()

db.sequelize.sync()
    .then(() => {
        console.log('db connect')
    })
    .catch(console.error)

passportConfig()

app.use(helmet())

app.use(cors({
    origin:[process.env.FRONT_URL],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'))
    app.use(hpp())
}else{
    app.use(morgan('dev'))
}
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
        domain: process.env.NODE_ENV === 'production' && '.brmnmusic.com'
    }
}));
app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req,res) => {
    res.send('hello')
})


app.use('/user',userRouter)
app.use('/auth',authRouter)

app.get('/naver/oauth', async function (req, res, next) {
    passport.authenticate('naver', async function (err, user) {
        if (!user) { return res.redirect(`${process.env.FRONT_URL}/signup/fail`); }
        req.logIn(user, async function (err) {
            return res.redirect(`${process.env.FRONT_URL}`)
        })
    })(req, res);
});

app.get('/kakao/oauth', async function (req, res, next) {
    passport.authenticate('kakao', async function (err, user) {
        if (!user) { return res.redirect(`${process.env.FRONT_URL}/signup/fail`) }
        req.logIn(user, async function (err) {
            return res.redirect(`${process.env.FRONT_URL}`)
        })
    })(req, res)
})

app.listen(3065, '0.0.0.0',() => {
    console.log("server open")
})
