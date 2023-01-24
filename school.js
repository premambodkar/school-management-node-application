// Importing express module
const express = require('express');
const router = express.Router();

// Handling request using router
router.get('/getSchool', (req, res, next) => {
  res.send([{ id: 1, name: 'DAV', location: 'Pune' }]);
});

// Importing the router
module.exports = router;
