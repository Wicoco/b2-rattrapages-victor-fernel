const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Formulaire de commande
router.get('/new', (req, res) => {
  res.render('orderForm');
});

// Enregistrement de commande
router.post('/new', async (req, res) => {
  const { nom, prenom, adresse, email } = req.body;
  const prix = Math.floor(Math.random() * 100) + 1; // Prix aléatoire entre 1 et 100€

  const order = new Order({
    nom, prenom, adresse, email, prix, statut: 'Commande prise en compte'
  });

  await order.save();
  res.redirect('/orders/list');
});

// Liste des commandes
router.get('/list', async (req, res) => {
  const orders = await Order.find();
  res.render('orderList', { orders });
});

// MAJ du statut
router.post('/update/:id', async (req, res) => {
  const { statut } = req.body;
  await Order.findByIdAndUpdate(req.params.id, { statut });
  res.redirect('/orders/list');
});

module.exports = router;
