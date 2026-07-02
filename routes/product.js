const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Rice', price: 500 },
  { id: 2, name: 'Wheat', price: 400 },
  { id: 3, name: 'Sugar', price: 300 },
  { id: 4, name: 'Milk', price: 50 },
  { id: 5, name: 'Oil', price: 200 },
  { id: 6, name: 'Soap', price: 40 },
  { id: 7, name: 'Shampoo', price: 120 },
  { id: 8, name: 'Biscuits', price: 30 },
  { id: 9, name: 'Juice', price: 80 },
  { id: 10, name: 'Detergent', price: 150 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
