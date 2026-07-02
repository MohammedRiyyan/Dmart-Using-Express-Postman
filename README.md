# 🛒 DMART API

A simple **Express.js REST API** that simulates DMART data.

This project provides sample data for the following modules:

- Customer
- Employee
- Payment
- Product

Each endpoint returns **10 sample records** stored in static arrays. This project is intended for learning and practicing REST API development using Express.js.

---

# 📂 Project Structure

```
dmart-api/
│── index.js
│── package.json
│── routes/
│   ├── customer.js
│   ├── employee.js
│   ├── payment.js
│   └── product.js
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/dmart-api.git
```

## 2. Go to the Project Folder

```bash
cd dmart-api
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run the Server

```bash
node index.js
```

The server will start at:

```
http://localhost:5000
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Returns DMART API information |
| GET | `/customer` | Returns all customer records |
| GET | `/employee` | Returns all employee records |
| GET | `/payment` | Returns all payment records |
| GET | `/product` | Returns all product records |

---

# 📬 Sample Responses

## GET /

```json
{
  "name": "DMART Info",
  "routes": [
    "Customer",
    "Employee",
    "Payment",
    "Product"
  ]
}
```

---

## GET /customer

```json
[
  {
    "id": 1,
    "name": "Alice",
    "city": "Bangalore"
  },
  {
    "id": 2,
    "name": "Bob",
    "city": "Mumbai"
  }
]
```

---

## GET /employee

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "designation": "Manager"
  },
  {
    "id": 2,
    "name": "Priya",
    "designation": "Cashier"
  }
]
```

---

## GET /payment

```json
[
  {
    "id": 1,
    "method": "UPI",
    "amount": 1200
  },
  {
    "id": 2,
    "method": "Cash",
    "amount": 850
  }
]
```

---

## GET /product

```json
[
  {
    "id": 1,
    "name": "Rice",
    "price": 60
  },
  {
    "id": 2,
    "name": "Milk",
    "price": 30
  }
]
```

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman (API Testing)

---

# 📌 Features

- REST API using Express.js
- Modular routing
- Static JSON responses
- Easy to understand project structure
- Beginner-friendly implementation
- Tested using Postman

---

# 📖 Notes

- This project is created for educational purposes.
- All data is stored in arrays inside the route files.
- No database is used.
- The API currently supports only GET requests.

---

# 🚀 Future Improvements

- Add POST APIs
- Add PUT APIs
- Add DELETE APIs
- Connect MongoDB/MySQL database
- Add Authentication using JWT
- Add Search and Filter functionality
- Implement Error Handling
- Add API Documentation using Swagger

---

# 👨‍💻 Author

**Created by Rayyan**

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and share this project for learning purposes.
