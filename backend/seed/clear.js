const { clearDb } = require(".")
const clearAll = () => clearDb().finally(process.exit)

clearAll()
