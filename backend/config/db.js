import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: '../../config.env' })

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://ahmedSherif:225588@cluster0.dqjgxvg.mongodb.net/ui-store?retryWrites=true&w=majority`, {

            useUnifiedTopology: true,

            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline);
    }
    catch (error) {

        console.error(`Error: ${error.message}`.magenta.underline.bold)
        process.exit(1)
    }
}
export default connectDb