const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  email: String,
  prix: Number,
  statut: {
    type: String,
    enum: ['Commande prise en compte', 'En cours', 'Réalisée', 'Annulée'],
    default: 'Commande prise en compte'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
