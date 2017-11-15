const test = require('ava')
const secs = require('./secs')

test('word to number', t => {
  t.is(secs('2 days'), 2 * 24 * 60 * 60)
})

test('from number to a word', t => {
  t.is(secs(2 * 24 * 60 * 60), '2d')
  t.is(secs(2 * 24 * 60 * 60, { long: true }), '2 days')
})
