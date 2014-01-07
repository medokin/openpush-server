var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
  displayName: { type: String, default: '' },
  email: { type: String, default: '' },
  provider: { type: String, default: '' },
  providerId: { type: String, default: '' }
});


userSchema.statics.findOrCreate = function (user, callback) {
  var self = this;

  var query = {
    provider: user.provider,
    providerId: user.providerId
  };

  this.model('User').findOne(query, function(err, result){
    if(err) return callback(err, result);
    if(!result) return self.create(user, callback);

    callback(err, result);

  });
}
module.exports = mongoose.model('User', userSchema);
