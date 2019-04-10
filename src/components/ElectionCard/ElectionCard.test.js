import React from 'react';
import { shallow } from 'enzyme';

import { ElectionCard } from './ElectionCard';

describe('ElectionCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ElectionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
