import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema = new Schema({
    
    guestname:{
        type: String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true
    },
    playlists: {
        type: Array,
        required: false,
      },
    isSjaard:{
        type:Boolean,
        default:false
    }

  }, {
    timestamps:true
  }
);

export default mongoose.model("Users", UsersSchema)