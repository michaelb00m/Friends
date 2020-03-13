// FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    groups: [{
        id: String,
        owner: Boolean,
    }],
    location: {
        lat: {
            type: Number,
            required: true,
        },
        long: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        }
    },
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);