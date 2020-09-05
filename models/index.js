import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.gradeModel = gradeModel(mongoose);

export { db };
