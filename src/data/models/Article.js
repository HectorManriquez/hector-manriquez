
import mongooseConn from '../mongoose';
import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    require: true
  },
  author: { type: String },
  publishedDate: { type: String },
  contentSnippet: { type: String }
});

const Article = mongooseConn.model('Article', articleSchema);

export default Article;
