const router = require('express').Router();
const { User, Crypto } = require('../models');
// const Auth = require('../utils/auth')

// GET all in profile
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [
          {
            model: Crypto,
          },
        ],
      });
  
      const users = userData.map((user) =>
        user.get({ plain: true })
      );
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('profile', {
        users,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  module.exports = router;
  