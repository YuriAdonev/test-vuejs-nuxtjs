const passport = require('passport');
const {Router} = require('express');
const ctr = require('../controllers/transaction.controllers');
const router = Router();

// admin
router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
)

// base
router.post(
  '/',
  ctr.create
)

module.exports = router;