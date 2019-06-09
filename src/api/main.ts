const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

const setupAPI = async (socket, io) => {
  const orderFile = await readFile('./src/api/challenge_data.json', 'utf8')
  const orders = JSON.parse(orderFile).sort(
    (a, b) => a.sent_at_second - b.sent_at_second
  )
  const timeStart = Date.now()
  let mutableAccumulator = orders
  const timer = setInterval(() => {
    let toSend = mutableAccumulator.filter(
      ord => ord.sent_at_second <= (Date.now() - timeStart) / 1000
    )
    if (toSend.length > 0) {
      mutableAccumulator.splice(0, toSend.length)
      socket.emit('FromAPI', toSend)
    }
    if (mutableAccumulator.length === 0) {
      clearInterval(timer)
      mutableAccumulator = orders
      socket.on('disconnect', () => null)
    }
  }, 1000)
}

module.exports = { setupAPI }
