/**
 * Created by JayHo on 17/01/17.
 */
'use strict'

const http 		= require('http'),
	createError = require('http-errors'),
	express 	= require('express'),
	path 		= require('path'),
	cookieParser = require('cookie-parser'),
	logger 		= require('morgan'),
	router 		= express.Router(),
	bodyParser 	= require('body-parser'),
	passport 	= require('passport'),
	compression = require('compression'),
	cors 		= require('cors');

let app = express();

const { db, TABLES } = require('./models');


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));


//**** Passport ****//
app.use(passport.initialize());
app.use(passport.session());

//**** Router ****//
router.use(require('./routes/index'));
app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

let server = http.createServer(app);
server.listen(80, () => {
  console.log('Server listening on port ' + 80);
});
