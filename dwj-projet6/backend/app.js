const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const app = express();

// pour corriger l'erreur CORS
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

mongoose.connect('mongodb+srv://Shinojima:R8HJpb3paJGEj6Jb@piquantedb.mqb4n.mongodb.net/PiquanteDB?retryWrites=true&w=majority',
  {useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api', userRoutes);

module.exports = app;
