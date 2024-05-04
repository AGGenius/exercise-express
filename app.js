const express = require('express')

// Import Morgan for request logging here
const morgan = require('morgan');

// Import movies and genres from data.js here
//const {movies, genres} = require('./data');
const app = express()
const port = 3000

// Configure the middleware for morgan here
app.use(morgan('dev'));

// Import router modules for each entity here
const testingRoute =  require('./routes/testing');
const moviesRoute =  require('./routes/movies');
const genresRoute =  require('./routes/genres');


app.use('/api/health', testingRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/genres', genresRoute);

/* De Antonio.
app.use('/api', require('./routes/testing'));
app.use('/api', require('./routes/movies'));
app.use('/api', require('./routes/genres'));
*/

app.listen(port, () =>
	console.log(`Server is running on port http://localhost:${port}`)
)
