import { v4 as uuidv4 } from 'uuid'
export const generateID = (obj) => ({ ...obj, id: uuidv4() })
