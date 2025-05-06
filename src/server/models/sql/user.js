import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

const Comment = sequelize.define('Comment', {
  text: DataTypes.STRING
});

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Comment.belongsTo(User);
User.hasMany(Comment);

export { User, Post, Comment };
