import passport from 'passport'
import { finishAuth } from '@startupjs/auth/server'

export default function loginWebCallback (req, res, next, { successRedirectUrl }) {
  passport.authenticate('google', function (err, userId) {
    if (err) {
      console.log('[@startup/auth-google] Error:', err)
      res.status(500).json({ error: err })
    }

    finishAuth(req, res, { userId, successRedirectUrl })
  })(req, res, next)
}