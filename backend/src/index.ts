import express from 'express'

const app = express()
const port = 3000

app.use('/', (req, res) => {
  res.json({'message':"Hello"})
  })

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})