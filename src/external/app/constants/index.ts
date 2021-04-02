const LOCAL_PORT = process.env.LOCAL_PORT
const PRODUCTION_PORT = process.env.PORT

export const PORT = PRODUCTION_PORT || LOCAL_PORT

export const MONGO_URL = process.env.MONGO_URL
export const DEFAULT_USER_ROLE = process.env.DEFAULT_USER_ROLE
