const express = require('express');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();
app.set('view cache', true);
app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views/admin'),
    path.join(__dirname, 'views/user')
])


app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d' // Cache CSS files for 1 day
}));


app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    maxAge: '1d' // Cache CSS files for 1 day
}));


app.use('/', require('./routes/admin'));

app.get('*', function (req, res) {
    res.redirect('/login');
});
app.use(compression({ level: 6 }));
app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        console.log('Server Not Started');
    } else {
        console.log('Server Start At : ', process.env.PORT);
    }
});