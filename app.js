const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const path = require('path');
const setupJsFileRoutes = require('./setupJsFileRoutes');
let motherObject = {};

app.use(express.text());
app.use(cors());

// Set up routes for JS files
setupJsFileRoutes(app).then(count => {
  console.log(`Set up ${count} routes for JS files`);
});

// Serve the main.js file on GET request to '/'
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'scripts', 'main.js');
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Counter app listening at http://localhost:${port}`);
});
