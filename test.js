'use strict'
import test from 'ava'
import fn from './'

test('large', async t => {
  const result = await fn('FreeCodeCamp/FreeCodeCamp')
  t.truthy(result.length > 200 && result.length < 500)
})

test('small', async t => {
  const result = await fn('millette/committed-streaker')
  t.truthy(result.length < 100)
})

test('not found', async t => await t.throws(fn('millette/committed-streaker666'), 'Response code 404 (Not Found)'))
