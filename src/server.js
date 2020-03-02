const express = require('express');
const env = require('./config/config');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const app = express();


//SETTINGS
app.set('port', env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  defaultLayout:'main',
  layoutsDir:app.get(path.join(app.get('views'), 'layouts')),
  partialsDir:app.get(path.join(app.get('views'), 'partials')),
  extname:'.hbs'
}));
app.set('view engine', '.hbs');

// MIDDLEWARES
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true
}));
app.use(flash());



// GLOBAL VARIABLES
app.use( (req, res, next ) => {

  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


//ROUTES

app.use(require('./routes/index.routes'));


//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;