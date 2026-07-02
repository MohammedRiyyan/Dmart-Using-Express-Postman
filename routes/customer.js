const express = require('express');
const router = express.Router();

const customers = [
  { id: 1, name: 'Alice', city: 'Bangalore' },
  { id: 2, name: 'Bob', city: 'Mumbai' },
  { id: 3, name: 'Charlie', city: 'Delhi' },
  { id: 4, name: 'David', city: 'Hyderabad' },
  { id: 5, name: 'Eva', city: 'Chennai' },
  { id: 6, name: 'Frank', city: 'Pune' },
  { id: 7, name: 'Grace', city: 'Kolkata' },
  { id: 8, name: 'Hannah', city: 'Jaipur' },
  { id: 9, name: 'Ian', city: 'Lucknow' },
  { id: 10, name: 'Jack', city: 'Surat' }
];

router.get('/', (req, res) => {
  res.json(customers);
});

module.exports = router;

