import mongoose from 'mongoose'
import { MONGO_URL } from '../../app/constants'

export const mongo = {
    async connect() {
        if (MONGO_URL) {
            await mongoose.connect(
                MONGO_URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                },
                () => console.log('Connected to MongoDB')
            )
            return
        }
        console.log('MongoDB connection URL not provided')
    }
}
