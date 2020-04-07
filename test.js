const express = require('express');

const router = express.Router();

router.use('/test', (req, res, next) => {
    res.send("<h1>Test Now</h1>");
});

module.exports = router;