const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message)
    process.exit(1)
  }
}

//we are exporting the function 'connectDB' which connects us to our DB with mongoose
module.exports = connectDB
