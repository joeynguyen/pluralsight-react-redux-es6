// dynamic imports aren't supported by ES6
// so we're using require instead of import
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod.js');
} else {
  module.exports = require('./configureStore.dev.js');
}
