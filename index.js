const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
// app.use(fileUpload()); // To Upload Files as binary (DOn't forget to install the package - npm i express-fileupload)

// Routes
app.use(authRoutes);


// mongodb+srv://hrhasib:<password>@si-survey-cluster.9qrszl4.mongodb.net/?retryWrites=true&w=majority&appName=si-survey-cluster

const PORT = process.env.PORT || 8000;
mongoose
  .connect(
    `your-mongo-db-url`)
  .then(() => {
    console.log('Database Connected.')
    app.listen(PORT, () => {
      console.log(`Server is connected at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });