const express = require('express');
const router = express.Router();

// POST /api/verify
router.post('/', (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

// GET /api/verify/:id
router.get('/:id', (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

module.exports = router;
