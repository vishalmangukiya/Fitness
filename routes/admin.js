const express = require('express');
const routes = express.Router();

// Controllers
const LoginController = require('../controllers/LoginController');
const ProfileController = require('../controllers/ProfileController');
const ResetController = require('../controllers/ResetController');
const IntroController = require('../controllers/IntroController');
const BodyPartsController = require('../controllers/BodyPartsController');
const WorkoutController = require('../controllers/WorkoutController');

// Login
routes.get('/login', LoginController.login);

// Dashboard
routes.get('/dashboard', LoginController.dashboard);

// Profile
routes.get('/profile', ProfileController.profile);

// Reset-password
routes.get('/resetpassword', ResetController.resetpassword);

// intro
routes.get('/intro', IntroController.intro);
routes.get('/viewintro', IntroController.viewintro);
// banner
routes.get('/bodyparts', BodyPartsController.bodyparts);
routes.get('/viewbodyparts', BodyPartsController.viewbodyparts);

// Workout
routes.get('/workout', WorkoutController.workout);
routes.get('/viewworkout', WorkoutController.viewworkout);


// logout
routes.get('/logout', LoginController.logout);

routes.get('*', function (req, res) {
    res.redirect('/login');
})

module.exports = routes;