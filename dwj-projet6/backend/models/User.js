const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // permet la verification supplémentaire pour éviter l'inscription multiple avec le même mail

const userSchema = mongoose.Schema({
    userId: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);