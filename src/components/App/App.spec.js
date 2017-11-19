import test from 'ava'
import React from 'react'
import { shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

configure({ adapter: new Adapter() })

test('Should contain header', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.text().includes('Tasks'), true)
})

test('Should contain application name', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.text().includes('Allmax Task Manager'), true)
})