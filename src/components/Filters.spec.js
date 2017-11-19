import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Filters from './Filters'

configure({ adapter: new Adapter() })

test.skip('Current filter should be disabled', t => {
})

test.skip('Should contain filter labels as text', t => {
})

test.skip('Should filter correctly', t => {
})

test.skip('Should have search field', t => {
  const wrapper = shallow(<Filters />)
  t.is(wrapper.text().includes('Search'), true)
})

test.skip('Should search correctly', t => {
})