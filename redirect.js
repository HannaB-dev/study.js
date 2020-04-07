const express = require("express");

const router = express.Router();

router.get('/redirect', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;