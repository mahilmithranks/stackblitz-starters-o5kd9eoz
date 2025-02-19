const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },
      roles: {
        type: [String],
        default: ['user']
      },
      profile: {
        firstName: String,
        lastName: String,
        age: Number
      },
      lastLogin: {
        type: Date,
        default: Date.now
      }
    }, { timestamps: true });


  const User=mongoose.model('User',userSchema);

  module.exports=User;