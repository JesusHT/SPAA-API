const express      = require('express');
const cors         = require('cors');
const morgan       = require('morgan');
const config       = require('./config');
const cookieParser = require('cookie-parser');
const cookies      = require('./cookies/config')
const error        = require('./red/errors');

const inventory     = require('./modules/inventory/routes');
const users         = require('./modules/users/routes');
const auth          = require('./modules/auth/routes');
const faculty       = require('./modules/faculty/routes');
const history       = require('./modules/history/routes');
const brands        = require('./modules/brands/routes');
const models        = require('./modules/models/routes');
const laboratories  = require('./modules/laboratories/routes');
const roles         = require('./modules/roles/routes');
const settings      = require('./modules/settings/routes');
const borrow        = require('./modules/borrow/routes');
const career        = require('./modules/career/routes');
const authData      = require('./modules/userAuth/routes.js');

const app = express();

app.use(cors({
    origin:[
        'http://192.168.1.94:19000',
        'http://localhost:3000',
        'http://localhost:8081'],
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

// Auth
app.use('/api/auth', auth);

// Routes
app.use('/api/authdata/', authData);
app.use('/api/inventario', inventory);
app.use('/api/usuarios', users);
app.use('/api/facultad', faculty);
app.use('/api/historial', history);
app.use('/api/marcas', brands);
app.use('/api/modelos', models);
app.use('/api/laboratorios', laboratories);
app.use('/api/roles', roles);
app.use('/api/ajustes', settings);
app.use('/api/prestamos', borrow);
app.use('/api/carreras', career);
app.use(error);

module.exports = app;