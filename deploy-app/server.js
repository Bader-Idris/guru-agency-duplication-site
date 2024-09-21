const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './static')))
const mainEndpoint = (req, res) => {
  res.sendFile(path.join(__dirname, './static', 'index.html'))
}
app.get('*', mainEndpoint)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})