const path = require('path');
const express = require('express');
const app = express();

console.log(__dirname);
console.log(path.join(__dirname, '../public/about.html'));

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
  res.render('index', {
    title: 'hbs title new title new new',
    name: 'rythem',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'about title new',
    name: 'rythem',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    msg: 'Help msg',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Delhi',
    forcast: 50,
  });
});

app.listen(3000, () => {
  console.log('Server started at port no 3000');
});
