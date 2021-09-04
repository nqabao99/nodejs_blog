const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const methodOverride = require('method-override');

const route = require('./resource/routes');
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.use(methodOverride('_method'));

route(app);

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
