const express = require('express');

const app = express();
const PORT = process.env.PORT || 3003;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires HTML route
require('./htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));