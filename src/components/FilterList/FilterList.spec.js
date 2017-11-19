import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FilterList from './FilterList'

configure({ adapter: new Adapter() })