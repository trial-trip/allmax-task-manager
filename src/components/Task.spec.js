import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Task from './Task'

configure({ adapter: new Adapter() })

const demoTask = {
  id: 0,
  title: 'Run 10 km',
  description: 'That will make you glad\n\n...\nMaybe))',
  priority: 1,
  deadline: '14.11.2017',
  completionDate: '12.11.2017'
}

test('Should show title and description', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.title), true)
  t.is(wrapper.html().includes(demoTask.description), true)
})

test('Should show completion date, if was set', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.completionDate), true)
})

test('Should show deadline, if was set', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.deadline), true)
})

test.skip('Should be marked as completed if completion date was set', t => {
  // check nested elements later
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.completionDate), true)
})

test.skip('Should not be marked as completed if completion date was not set', t => {
  // check nested elements later
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.completionDate), true)
})

test.skip('Should display correct priority', t => {
  // check nested elements later
})
