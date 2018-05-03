const React = require('react')
const { hot } = require('react-hot-loader')

const App = () => <div>Hello World!</div>

module.exports = process.env.NODE_ENV === 'production' ? App : hot(module)(App)
