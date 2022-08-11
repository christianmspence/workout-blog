const express = require('express');
const routes = require('./controllers');
// below
const sequelize = require('./config/connection');
const path = require('path')
const exphb = require('express-handlebars')
// below
const session = require('express-session')
const hbs = exphb.create({})

// below
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// below function
 const sess = {
  secret: 'super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
// below
app.use(session(sess))

// turn on routes
app.use(routes);

// below
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}); 


app.listen(PORT, () => console.log('Now listening'));