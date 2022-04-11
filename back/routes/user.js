const express = require('express')
const {isNotLoggendIn, isLoggendIn} = require("./middlewares");

const router = express.Router()

router.get('/', async (req,res,next) => {
  try{
    console.log("login",req.user)
    if (req.isAuthenticated()){
      console.log(req.user)
      res.status(200).json(req.user.email)
    }else {
      res.status(401).send('you are not login')
    }
  }catch (err){
    console.error(err)
    next(err)
  }
})
router.post('/logout',isLoggendIn,async (req,res,next) => {
  try{
    req.logout()
    req.session.destroy()
    res.status(200).send('ok')
  }catch (err) {
    console.error(err)
    next(err)
  }
})


module.exports = router

