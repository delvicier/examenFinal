import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import produtosRutas from './routes/productos.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())

// para entender los objetos json que recibamos 
// de un cliente
app.use(express.json())
app.use(produtosRutas)

export default app;