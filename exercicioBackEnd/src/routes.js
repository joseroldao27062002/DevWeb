const express = require('express')
const reader = require('./reader.js')

const router = express.Router();

module.exports = router.get('/:file', async (req, res) => {
  const file = req.params.file;
  const content = cat(file);
 
  req.send(content)
});
