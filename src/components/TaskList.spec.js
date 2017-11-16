import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TaskList from './TaskList'

configure({ adapter: new Adapter() })

test.skip('Should have same number of Tasks as passed', t => {
  //
})