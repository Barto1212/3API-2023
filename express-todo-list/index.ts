import express from 'express'
import cors from 'cors'

const todoList = [
  { text: 'Faire les courses', id: 1 },
  { text: 'Faire le ménage', id: 2 },
]
const app = express()
app.use(cors())

app.use(express.static('public'))
app.get('/api/todo', (req, res) => {
  res.send(todoList)
})

app.listen(80, () => {
  console.log('listening on 80')
})
