const ms = require('ms')
module.exports = function secs(value, opts) {
  if (typeof value === 'number') {
    value = value * 1000
    return ms(value, opts)
  } else {
    return Math.round(ms(value) / 1000)
  }
}
