const express = require('express')
const app = express()

app.get('/', (request, response) => {
   response.status(200).send('Backend!')
})

app.listen(3000, () => {
   console.log('Backend is working!')
})