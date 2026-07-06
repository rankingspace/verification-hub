const express = require('express');
const router = express.Router();

// GET /api/admin/users
router.get('/users', (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

// GET /api/admin/stats
router.get('/stats', (req, res) => {
  res.status(501).json({ error: 'Not implemented' });
});

module.exports = router;
