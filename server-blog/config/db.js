const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connected');
            })
            .catch((error) => {
                console.log('Error connecting to database');
            });

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;