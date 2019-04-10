import React from 'react';
import { shallow } from 'enzyme';
import { mockElectionData } from '../../helpers/mockElectionData';

import { CardContainer } from './CardContainer';

describe('CardContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer electionData={mockElectionData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
