const app = require('./app')

// Listen
const port = process.env.PORT
app.listen(port, () => console.log(`app listening on port port! ${port}`))