// models/user.model.js
const mongoose = require('mongoose');

const userTrackSchema = new mongoose.Schema(
    {
    user:{
      type: String,
      required: true, 
      unique: true
    },
    trackhandle: [String], // array of string
    tophandle: [String]    // array of string
},{
  timestamps:true
}
);


const UserTrack = mongoose.model('UserTrack', userTrackSchema);
module.exports = UserTrack;
