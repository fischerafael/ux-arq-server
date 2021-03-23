import 'dotenv/config'
import { app } from './external/app'
import { LOCAL_PORT } from './external/app/constants'

app.listen(LOCAL_PORT, () =>
    console.log(`Server running on port ${LOCAL_PORT}`)
)
