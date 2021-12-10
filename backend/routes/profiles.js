var express = require('express');
var router = express.Router();
const Profile = require('../controllers/profile.controller.js');

// Tous les profils
router.get('/', Profile.findAll);

// Trouver un profil
router.get('/:name', Profile.findByLastName);


// Sauvegarder
router.post('/', Profile.saveOne);

// Supprimer un profil
router.delete('/:name', Profile.deleteByLastName);

// Updater un profil
router.put('/:id', Profile.updateProfile);


module.exports = router;