import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TaskList from './TaskList'

const demoTask = {
  id: 0,
  title: 'Run 10 km',
  description: 'That will make you glad\n\n...\nMaybe))',
  priority: 1,
  deadline: '2017-11-16T03:13:37.000Z',
  completionDate: '2017-11-13T03:13:37.000Z',
  onToggleCompleted: x => x,
  onDeleteClick: x => x
}

const demoHandlers = {
  onTaskDelete: x => x,
  onTaskClick: x => x
}

configure({ adapter: new Adapter() })

test('Should have same number of Tasks as passed', t => {
  const w6 = shallow(<TaskList { ...demoHandlers } tasks={Array(6).fill({...demoTask})} />)
  const w60 = shallow(<TaskList { ...demoHandlers }  tasks={Array(60).fill({ ...demoTask })} />)
  const w1 = shallow(<TaskList { ...demoHandlers }  tasks={Array(1).fill({ ...demoTask })} />)
  t.is(w6.children().length, 6)
  t.is(w60.children().length, 60)
  t.is(w1.children().length, 1)
})