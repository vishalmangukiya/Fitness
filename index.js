const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/admin'),
    path.join(__dirname, 'views/user')
])

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', require('./routes/admin'));

app.get('*', function (req, res) {
    res.redirect('/login');
});

app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        console.log('Server Not Started');
    } else {
        console.log('Server Start At : ', process.env.PORT);
    }
});