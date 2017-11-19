import test from 'ava'

import format_dd_mm_yyyy from './format_dd_mm_yyyy'

test('Should format dates in DD.MM.YYYY', t => {
  t.is(format_dd_mm_yyyy('2017-11-25T03:13:37.000Z'), '25.11.2017')
  t.is(format_dd_mm_yyyy('2000-11-25T03:13:37.000Z'), '25.11.2000')
  t.is(format_dd_mm_yyyy('2001-01-01:13:37.000Z'), '01.01.2001')
})

test('Should return empty string on failure', t => {
  t.is(format_dd_mm_yyyy('adfgefgadfgqeg'), '')
  t.is(format_dd_mm_yyyy(''), '')
})