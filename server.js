const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'bei-poa.html'));
});

// Also allow direct access
app.get('/bei-poa.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'bei-poa.html'));
});

// Fallback
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Bei Poa is running on port ${PORT}`);
});
