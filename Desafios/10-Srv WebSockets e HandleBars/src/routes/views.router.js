// Arquivo: routes/views.router.js

const express = require('express');
const router = express.Router();

// Rota para renderizar a visualização "home"
router.get('/', (req, res) => {
  res.render('home');
});

// Rota para renderizar a visualização "realTimeProducts"
router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

module.exports = router;
