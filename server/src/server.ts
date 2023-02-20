import mongoose from 'mongoose'
import app from './app'

const mongoUri = process.env.MONGO_URI!
mongoose
  .connect(mongoUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // autoIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`App running on port ${process.env.PORT || 5000}`)
    )
  })
  .catch((error) => {
    console.log(
      'Mongodb connection error. Please make sure your mongodb is running.' + error
    )
  })