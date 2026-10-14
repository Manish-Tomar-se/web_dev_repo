const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});
app.put('/update', (req, res) => {
  res.send('Data updated!');
});
app.delete('/delete', (req, res) => {
  res.send('Data deleted!');
});