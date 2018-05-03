const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const openBrowser = require('react-dev-utils/openBrowser')

const port = process.env.PORT || 3000
const app = express()
const compiler = webpack(config)
const url = `http://localhost:${port}${config.output.publicPath}`

if (process.env.MODE === 'production') {
  app.use(require('compression')())
}
if (process.env.MODE === 'development') {
  app.use(require('webpack-hot-middleware')(compiler))
}

const middlewareInstance = require('webpack-dev-middleware')(compiler, {
  stats: config.stats,
  publicPath: config.output.publicPath
})

app.use(middlewareInstance)
middlewareInstance.waitUntilValid(() => {
  console.log()
  console.log(`You can now view the app in the browser.`)
  console.log()
  console.log(`  ${url}`)
  console.log()
  openBrowser(url)
})

app.listen(port, function (err) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
