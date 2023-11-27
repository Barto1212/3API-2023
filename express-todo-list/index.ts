import express from 'express'

const todoList = ['Faire les courses', 'Faire le ménage']

const app = express()

app.use(express.static('public'))

app.listen(80, () => {
  console.log('listening on 80')
})
