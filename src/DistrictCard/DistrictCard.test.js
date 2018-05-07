import React from 'react';
import DistrictCard from './DistrictCard';
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Card Component', () => {

  it('renders the name of the district in <h1> tags', () => {
    const expectedValues = {
      location: 'COLORADO',
      stats: {}
    };
    const wrapper = shallow(<DistrictCard districtData={expectedValues} />);
    const title = <h1>COLORADO</h1>;
    expect(wrapper.contains(title.props.children)).toEqual(true);
  });

});