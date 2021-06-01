const express = require('express')
const router = express.Router()
const user = require('../dbModules/user.tsx')

// register page route.
router.post('/register', async (req, res, next) => {
  const userObject = req.body
  user.findOne({ email: userObject.email }, async function (err, users) {
    if (err) {
      return res.json({ success: false, msg: 'error occurred' })
    }

    if (users) {
      return res.json({
        success: false,
        msg:
          'A user with that email has already registered. Please use a different email..',
      })
    }
    const User = new user({
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      password: userObject.password,
      email: userObject.email,
    })

    await User.save((err, userObj) => {
      if (err) return res.json({ success: false, msg: 'error ocurred' })
      else {
        return res.json({ success: true, msg: 'user created' })
      }
    })
  })
})

module.exports = router
