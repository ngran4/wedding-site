const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, lowercase: true, unique: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
}, {
  timestamps: true
})


// Transform Methods (toJSON and toObject) - remove the password when serializing doc to JSON

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

// this is if you populate the user
userSchema.set('toObject', {
  transform: (doc, ret, opt) => {
  delete ret.password;
  return ret;
  }
});


// Hash the pw before saving it to the db (DO NOT DEFINE instance methods with arrow functions, they prevent the binding of 'this')
userSchema.pre('save', async function(next) {
  // check to see if the user has been modified, if not proceed in the middleware chain
  if (this.isModified('password')) return next();
  try {
    const salt= await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // no await?
    next();
  } catch (err) {
    next(err);
  }

});

// Instance method to compare password with the hashed password stored in the database.
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log(cb, '<-- this is cb')
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


const User = mongoose.model('User', userSchema);

module.exports = User;