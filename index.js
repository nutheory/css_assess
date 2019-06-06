/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const port = process.env.PORT || 5000
const { setupAPI } = require(path.resolve() + '/src/api/main.ts')

app.use(express.static(path.resolve() + '/dist/'))

io.of('/api').on('connect', socket => {
  socket.on('initialize', data => {
    console.log('Client data', data)
    if (data.event === 'INIT') {
      setupAPI(socket, io)
    }
  })
  console.log('Client connected', socket.id)
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/src/client/index.html')
})

http.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`)
})
