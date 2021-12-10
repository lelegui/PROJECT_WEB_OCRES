const mongoose = require('mongoose');

// Database et composants
const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true

    },
    country: {
        type: String,
        required: true

    },
    city: {
        type: String,
        required: true

    },

    president: {
        type: String,
        required: true
    }
});

const Profile = mongoose.model("Profile", profileSchema, "Profiles");

module.exports = { Profile }