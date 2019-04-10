import React from 'react';
import { shallow } from 'enzyme';

import AddressForm from './AddressForm';

describe('AddressForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AddressForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
