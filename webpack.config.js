const mode = process.env.MODE || 'development'
module.exports = require(`./config/webpack.${mode}.js`)
