import "dotenv/config"
import express from "express"
import { DBStart } from "./repository/db"
import { employeeRoutes } from "./routes/employee.routes"

const app = express()
const PORT = 3000
app.use(express.json())
app.use(employeeRoutes)

app.listen(process.env.PORT, () => {
    DBStart()
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})