import React from 'react';
import CompareDistricts from './CompareDistricts';
import { shallow, mount } from 'enzyme';

describe('CompareDistricts component', () => {

  it('should render the correct component', () => {
    const comparisonContainer = shallow(
      <CompareDistricts 
        selectedDistricts={[]}
        comparisonData={{}}
        comparisonCard={true}
      />);

    expect(comparisonContainer.find('.districts-compare').length).toEqual(1);
  });

  it('should match the ComparisonContainer snapshot', () => {
    const comparisonContainer = shallow(
      <CompareDistricts 
        selectedDistricts={[]}
        comparisonData={{}}
        comparisonCard={true}
      />);

    expect(comparisonContainer).toMatchSnapshot();
  });

  it('should render no cards when given no data', () => {
    const comparisonContainer = mount(
      <CompareDistricts 
        selectedDistricts={[]}
        comparisonData={{}}
        comparisonCard={true}
      />);

    expect(comparisonContainer.find('.comparison-card').length).toEqual(0);
    expect(comparisonContainer.find('.district-card').length).toEqual(0);
  });

  it('should render a card with a selected class but no comparison card when passed a single comparison', () => {
    const comparisonContainer = mount(
      <CompareDistricts 
        selectedDistricts={[{location: 'Colorado', data: {2003: 0.5, 2004: 0.6}}]}
        comparisonData={{}}
        comparisonCard={true}
      />);

    expect(comparisonContainer.find('.comparison-card').length).toEqual(0);
    expect(comparisonContainer.find('.district-card .selected').length).toEqual(1);
  });

  it('should render two cards with a selected class and a comparison card when passed a two comparisons', () => {
    const comparisonContainer = mount(
      <CompareDistricts 
        selectedDistricts={[
          {location: 'Colorado', data: {2003: 0.5, 2004: 0.6}},
          {location: 'DENVER', data: {2003: 0.1, 2004: 0.9}}
        ]}
        comparisonData={{
          'Colorado': 0.55,
          'DENVER': 0.5,
          'compared': 1.1
        }}
        comparisonCard={true}
      />);

    expect(comparisonContainer.find('.comparison-card').length).toEqual(1);
    expect(comparisonContainer.find('.district-card').length).toEqual(2);
  });

});