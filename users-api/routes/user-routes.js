const express = require('express');

const userActions = require('../controllers/user-actions');

const router = express.Router();

router.post('/signup', userActions.createUser);

router.post('/login', userActions.verifyUser);

router.get('/error', (req, res) => {
    res.send('Application error :) Now your data is gone hah');
    process.exit(1); // Zatrzymanie aplikacji z kodem wyjścia 1
});

module.exports = router;