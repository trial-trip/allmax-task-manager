import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Filters from './Filters'

configure({ adapter: new Adapter() })

test('Should contain filter labels as text', t => {
  const wrapper = shallow(<Filters />)
  t.is(wrapper.text().includes('All'), true)
  t.is(wrapper.text().includes('Important'), true)
  t.is(wrapper.text().includes('Very important'), true)
})

test.skip('Should filter correctly', t => {
})

test('Should have search field', t => {
  const wrapper = shallow(<Filters />)
  t.is(wrapper.text().includes('Search'), true)
})

test.skip('Should search correctly', t => {
})