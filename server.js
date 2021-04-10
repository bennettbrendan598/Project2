// Dependencies
const path = require('path');
const express = require('express');

//setting up express session module
const session = require('express-session');


const sequelize = require('./config/connection');
// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//handlebar instatiation 
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

//setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Setting our App to handle json file and encoded urls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/mainRoutes')); // must change this path once api routes are set up.

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server running on: http://localhost:' + PORT);
});