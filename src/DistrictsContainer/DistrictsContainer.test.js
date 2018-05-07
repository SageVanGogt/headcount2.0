import React from 'react';
import DistrictsContainer from './DistrictsContainer';
import { shallow, mount } from 'enzyme';
import DistrictCard from '../DistrictCard/DistrictCard';
import renderer from 'react-test-renderer';
import '../setupTests';

describe('<DistrictsContainer />', () => {
  
  it('renders correctly', () => {
    const districts = {
      'COLORADO': {
        location: 'COLORADO',
        data: {},
      }, 
      'CSPRINGS': {
        location: 'COLORADO SPRINGS',
        data: {}
    }};
    const handleSelect = jest.fn();
    const handleSearchEvent = jest.fn();
    const actual = renderer
      .create(<DistrictsContainer 
          districts={districts}
          comparisonCard={true}
          selectedDistricts={[{location: 'Colorado', data: {2004: 2}}]}
          handleSelect={handleSelect}
          handleSearchEvent={handleSearchEvent}
          />)
      .toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders a `.district-container`', () => {
    const expected = {
      'COLORADO': {
        location: 'COLORADO',
        data: {},
      }, 
      'CSPRINGS': {
        location: 'COLORADO SPRINGS',
        data: {}
    }};
    const handleSelect = jest.fn();
    const handleSearchEvent = jest.fn();
    const wrapper = shallow(<DistrictsContainer 
      districts={expected}
        comparisonCard={true}
        selectedDistricts={[{location: 'Colorado', data: {2004: 2}}]}
        handleSelect={handleSelect}
        handleSearchEvent={handleSearchEvent}
      />);

    expect(wrapper.find('.district-container')).toHaveLength(1);
  });

  it('renders children for as many DistrictCards that are passed in', () => {
    const expected = {
      'COLORADO': {
        location: 'COLORADO',
        data: {},
      }, 
      'CSPRINGS': {
        location: 'COLORADO SPRINGS',
        data: {}
    }};
    const handleSelect = jest.fn();
    const handleSearchEvent = jest.fn();
    const wrapper = shallow(<DistrictsContainer 
      districts={expected}
        comparisonCard={true}
        selectedDistricts={[{location: 'Colorado', data: {2004: 2}}]}
        handleSelect={handleSelect}
        handleSearchEvent={handleSearchEvent}
      />);

    expect(wrapper.find(DistrictCard)).toHaveLength(2);
  });

});
