const express = require('express');
const router = express.Router();

const {genres} = require('../data');

router.get('/', (req, res) => {
	res.json(genres)
})

module.exports = router;