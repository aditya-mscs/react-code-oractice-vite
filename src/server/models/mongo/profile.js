import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  bio: String,
  userId: String
});

const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;