const express = require('express');
const router = express.Router();

const payments = [
  { id: 1, method: 'Cash', status: 'Completed' },
  { id: 2, method: 'Credit Card', status: 'Completed' },
  { id: 3, method: 'Debit Card', status: 'Pending' },
  { id: 4, method: 'UPI', status: 'Completed' },
  { id: 5, method: 'Net Banking', status: 'Failed' },
  { id: 6, method: 'Wallet', status: 'Completed' },
  { id: 7, method: 'Cash', status: 'Completed' },
  { id: 8, method: 'UPI', status: 'Pending' },
  { id: 9, method: 'Credit Card', status: 'Completed' },
  { id: 10, method: 'Debit Card', status: 'Completed' }
];

router.get('/', (req, res) => {
  res.json(payments);
});

module.exports = router;
