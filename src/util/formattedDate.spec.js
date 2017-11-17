import test from 'ava'

import formattedDate from './formattedDate'

test('Should format dates in DD.MM.YYYY', t => {
  t.is(formattedDate('2017-11-25T03:13:37.000Z'), '25.11.2017')
  t.is(formattedDate('2000-11-25T03:13:37.000Z'), '25.11.2000')
  t.is(formattedDate('2001-01-01:13:37.000Z'), '01.01.2001')
})

test('Should return empty string on failure', t => {
  t.is(formattedDate('adfgefgadfgqeg'), '')
  t.is(formattedDate(''), '')
})