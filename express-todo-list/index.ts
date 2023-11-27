import express from 'express'
import cors from 'cors'
import { getTodos } from './controlers/get'
import { postTodo } from './controlers/post'
import 'dotenv/config'
import { connectDB } from './utils/connectDB'

// Config de base :
connectDB()
const app = express()
app.use(cors())
app.use(express.json())

// on sert le frontend :
app.use(express.static('public'))

// api backend :
app.get('/api/todo', getTodos)
app.post('/api/todo', postTodo)

// on écoute sur le port 80 :
app.listen(80, () => {
  console.log('listening on 80')
})
