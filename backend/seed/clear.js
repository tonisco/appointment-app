import { clearDb } from "."

export const clearAll = () => clearDb().finally(process.exit)
