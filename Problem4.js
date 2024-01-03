
//Database Interaction

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log("******************");
console.log(process.env);

mongoose.connect(process.env.Local_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
