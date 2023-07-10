const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/saveData', (req, res) => {
  const data = req.body;
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
