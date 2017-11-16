import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Task from './Task'

configure({ adapter: new Adapter() })

test('Should have title', t => {
  const wrapper = shallow(<Task />)
  t.not(wrapper.find('.task-title').length, 0)
})

test('Should have some completion status', t => {
  const wrapper = shallow(<Task />)
  t.not(wrapper.find('.task-completed').length + wrapper.find('.task-not-completed').length, 0)
})

test.skip('Should be marked as completed if completion date was set', t => {
  //
})

test.skip('Should be marked as not-completed if completion date was not set', t => {
  //
})

test.skip('Should have description if was set', t => {
  //
})

test.skip('Should have deadline if was set', t => {
  //
})

test.skip('Should display correct priority', t => {
  //
})
