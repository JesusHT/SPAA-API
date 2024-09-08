const express      = require('express');
const cors         = require('cors');
const morgan       = require('morgan');
const config       = require('./config');
const cookieParser = require('cookie-parser');
const cookies      = require('./cookies/config')

const inventory = require('./modules/inventory/routes');
const users     = require('./modules/users/routes');
const auth      = require('./modules/auth/routes');
const error     = require('./red/errors')

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Cookies 
app.use('/protected-route', cookies);  

// Config
app.set('port', config.app.port);

// Routes
app.use('/api/inventario', inventory);
app.use('/api/usuarios', users);
app.use('/api/auth', auth);
app.use(error);

module.exports = app;