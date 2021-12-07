const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
SALT_WORK_FACTOR = 10;


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    bcryptjs.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcryptjs.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcryptjs.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
