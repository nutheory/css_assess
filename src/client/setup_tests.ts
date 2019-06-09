import * as Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

// expect.addSnapshotSerializer(createSerializer({ noKey: false, mode: 'deep' }))

Enzyme.configure({ adapter: new Adapter() })
