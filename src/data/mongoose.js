
import mongoose from 'mongoose';
import {
  databaseUrl,
  databaseOptions
} from '../config';

const mongooseConn = mongoose.createConnection(databaseUrl, databaseOptions);

mongooseConn.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

mongooseConn.once('open', function() {
  console.log('Mongoose connection successful.');
});

export default mongooseConn;
