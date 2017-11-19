import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Task from './Task'
import formattedDate from '../util/formattedDate'

configure({ adapter: new Adapter() })

const demoTask = {
  id: 0,
  title: 'Run 10 km',
  description: 'That will make you glad\n\n...\nMaybe))',
  priority: 1,
  deadline: '2017-11-25T03:13:37.000Z',
  completionDate: '2017-11-25T03:13:37.000Z',
  onToggleCompleted: x => x,
  onDeleteClick: x => x
}

test('Should show title', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(demoTask.title), true)
})

test('Should contain aech line of description', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  const outText = wrapper.text()
  const descriptionLines = demoTask.description.split(`\n`)
  t.is(descriptionLines.every(s => outText.includes(s)), true)
})

test('Should show formatted completion date, if was set', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(formattedDate(demoTask.completionDate)), true)
})

test('Should show deadline, if was set', t => {
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(formattedDate(demoTask.deadline)), true)
})

test.skip('Should be marked as completed if completion date was set', t => {
  // check nested elements later
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(formattedDate(demoTask.completionDate)), true)
})

test.skip('Should not be marked as completed if completion date was not set', t => {
  // check nested elements later
  const wrapper = shallow(<Task {...demoTask} />)
  t.is(wrapper.html().includes(formattedDate(demoTask.completionDate)), true)
})

test.skip('Should display correct priority', t => {
  // check nested elements later
})
