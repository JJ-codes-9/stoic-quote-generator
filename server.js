const express = require('express')

const app = express()
const PORT = 3000

// This serves static files from the "public" folder (optional)
app.use(express.static('public'))

app.get('/api/stoic-quote', async (req, res) => {
  try {
    const response = await fetch('https://stoic.tekloon.net/stoic-quote')
    const data = await response.json()
    console.log(data)
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch stoic quote' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})