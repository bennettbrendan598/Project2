const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cryptoRoutes = require('./cryptoRoutes');

router.use('/users', userRoutes);
router.use('/cryptos', cryptoRoutes);

module.exports = router;
