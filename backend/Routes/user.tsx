const express = require("express");
const router = express.Router();
const user = require("../dbModules/user.tsx");
const nodemailer = require('nodemailer')

// register page route.
router.post("/register", async (req, res, next) => {
  const userObject = req.body;
  user.findOne({ email: userObject.email }, async (err, users) => {
    if (err) {
      return res.json({ success: false, msg: "error occurred" });
    }

    if (users) {
      return res.json({
        success: false,
        msg:
          "A user with that email has already registered. Please use a different email..",
      });
    }
    const User = new user({
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      password: userObject.password,
      email: userObject.email,
    });

    await User.save((err, userObj) => {
      if (err) return res.json({ success: false, msg: "error ocurred" });
      else {
        return res.json({ success: true, msg: "user created" });
      }
    });
  });
});

//login page route

router.post("/login", (req, res) => {
  const userObject = req.body;
  user.findOne({ email: userObject.email }, (err, User) => {
    if (err)
      return res.json({ success: false, type: 0, msg: "error occurred" });
    else if (User) {
      if (User.password == userObject.password)
        return res.json({ success: true, type: 0, msg: "successfully login" });
      else
        return res.json({ success: false, type: 2, msg: "password is wrong" });
    } else
      return res.json({
        success: false,
        type: 1,
        msg: "user is not registered",
      });
  });
});


// forgot password page route

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ffreako617@gmail.com',
//     pass: 'Freako@1234'
//   }

// })

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ffreako617@gmail.com',
    pass: 'Freako@1234'
  }
});

router.post('/forgotPassword', (req, res) =>{
  console.log(req.body.state);
  
  user.findOne({email: req.body.state}, (err, User) =>{
    if(err)
      return res.json({success: false, 'msg': 'something wrong happens please try after sometime'})
    if(User)
    {
      // write code for mail 
      const mailOptions = {
        from: 'ffreako617@gmail.com',
        to: req.body.state,
        subject: 'Reset link for password',
        text: 'password of '+ req.body.email+' is' + user.password +'. have a good day'
      }
      transporter.sendMail(mailOptions, (err, info) =>{
        if(err)
         {
           console.log(err);
           
           return res.json({success: false, 'msg': 'something wrong happens please try after sometime'})
         }
        else
         return res.json({success: true, 'msg': 'mail sent to user'})
      })
    }  
    else
      return res.json({success: false, "msg": 'Email is not registered please registered first!!!'})
  })
})

module.exports = router;
