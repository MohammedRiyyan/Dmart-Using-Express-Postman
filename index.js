const express = require('express');
const app = express();
const PORT = 5000; 

const customerRoutes = require('./routes/customer');
const employeeRoutes = require('./routes/employee');
const paymentRoutes = require('./routes/payment');
const productRoutes = require('./routes/product');
app.get('/', (req, res) => {
  res.send(`
    DMART Info
    1. Customer
    2. Employee
    3. Payment
    4. Product
  `);
});
app.use('/customer', customerRoutes);
app.use('/employee', employeeRoutes);
app.use('/payment', paymentRoutes);
app.use('/product', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
