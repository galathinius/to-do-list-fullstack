const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let notes = [
  {
    name: 'exam pr',
    content: 'protocoale si multithreading la burlacu',
    id: 0,
    done: false
  },
  {
    name: 'exam cs',
    content: 'catanoi',
    id: 1,
    done: false
  },
  {
    name: 'exam ecd',
    content: 'am scapat',
    id: 2,
    done: true
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)

  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0

  const note = request.body
  note.id = maxId + 1

  notes = notes.concat(note)

  response.json(note)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3067
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
