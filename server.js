const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/home', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);
app.get('/port-one', (req, res) =>
  res.sendFile(path.join(__dirname, '/pages/project-one.html'))
);
app.get('/port-two', (req, res) =>
  res.sendFile(path.join(__dirname, '/pages/project-two.html'))
);
app.get('/port-three', (req, res) =>
  res.sendFile(path.join(__dirname, '/pages/project-three.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
