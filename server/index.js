const express = require('express')
const consola = require('consola')
const {
  Nuxt,
  Builder
} = require('nuxt')
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const app = express()
const mongoose = require('mongoose');

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// _________________________________________________________________________________________________________________


// use middleware
app.use(bodyParser.json())
app.use(cors())
// app.use(morgan('combined'))

//connect to mongoDB
mongoose.connect(require('./config/key').mongooseURI, {
  useNewUrlParser: true
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.log(err);
});


//set up router
app.use('/api', require('./api'))
// _________________________________________________________________________________________________________________

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)






  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening aa on http://${host}:${port}`,
    badge: true
  })


}

start()
