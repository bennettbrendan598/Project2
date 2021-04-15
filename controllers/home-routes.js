const router = require('express').Router();
const { User, Crypto } = require('../models');
const withAuth = require('../utils/auth');

//Home page route
router.get('/', async (req, res) => {
  
    res.render('homepage');
  
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Crypto }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Contact route
router.get('/contact', (req, res) => {
  res.render("contact") 
})


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});



module.exports = router;
