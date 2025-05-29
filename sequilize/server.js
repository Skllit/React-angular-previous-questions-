const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemroutes');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    // Sync the model with the database (creates the table if it doesn't exist)
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
app.use('/api/items', itemRoutes);