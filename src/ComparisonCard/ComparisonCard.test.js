import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonCard from './ComparisonCard'
import { shallow, mount } from 'enzyme';
import '../setupTests';

describe('Comparison Card Test', () => {
  it('Should match the comparison card snapshot', () => {
    // const data = 
    const comparisonCard = shallow(<ComparisonCard 
      comparisonData={
        {
        'ADAMS COUNTY 14': 0.709,
        'COLORADO': 0.53,
        'compared': 0.748
      } 
    }
      />)

    expect(comparisonCard).toMatchSnapshot()
  })
})