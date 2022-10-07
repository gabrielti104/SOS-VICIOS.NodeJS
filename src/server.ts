import express from 'express'
import path from 'path'
import mustache from 'mustache-express'
import mainRoutes from './routes/index'

const server = express()

server.set('view engine','mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes)

server.use((req,res) =>{
    res.status(404).send("Pagina não encontrada")
})

server.listen(3000)