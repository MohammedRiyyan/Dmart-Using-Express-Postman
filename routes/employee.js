const express = require('express');
const router = express.Router();

const employees = [
  { id: 1, name: 'Ravi', role: 'Manager' },
  { id: 2, name: 'Sita', role: 'Cashier' },
  { id: 3, name: 'Arjun', role: 'Sales' },
  { id: 4, name: 'Meena', role: 'HR' },
  { id: 5, name: 'Kiran', role: 'Security' },
  { id: 6, name: 'Anil', role: 'Stock Manager' },
  { id: 7, name: 'Priya', role: 'Billing' },
  { id: 8, name: 'Vikram', role: 'Customer Support' },
  { id: 9, name: 'Neha', role: 'Accounts' },
  { id: 10, name: 'Raj', role: 'Delivery' }
];

router.get('/', (req, res) => {
  res.json(employees);
});

module.exports = router;
