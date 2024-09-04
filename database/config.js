import { connect } from 'mongoose'

const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_CNN)
        console.log('Connect to Mongo DB')
    }
    catch (error) {
        console.log(error)
    }
}

export default dbConnection //Export function dbconnection