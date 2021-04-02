import 'dotenv/config'

import { app } from './external/app'
import { PORT } from './external/app/constants'

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
