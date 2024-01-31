// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen({
  port: PORT,
  host: '0.0.0.0'
}, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
