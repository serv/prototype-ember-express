let express = require('express');
let path = require('path');
var app = module.exports = express();

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'src/assets/ember-quickstart/dist'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  // TODO: if not signed in, redirect to login
  res.render('index', {});
});

app.get('/login', (req, res) => {
})

app.post('/login', (req, res) => {
  // TODO: login request
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
