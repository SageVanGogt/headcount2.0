import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
// import '../setupTests';

describe('App test', () => {
  it('Should render all the components', () => {
    const appComponent = shallow(<App />)
 
    expect(appComponent.find('Search').length).toEqual(1)
    expect(appComponent.find('CompareDistricts').length).toEqual(1)
    expect(appComponent.find('DistrictsContainer').length).toEqual(1)
  });

  it('Should match the snapshot', () => {
    const appComponent = shallow(<App />)

    expect(appComponent).toMatchSnapshot()
  })

  it('should render with the correct default state', () => {
    const appComponent = shallow(<App />)

    expect(Object.keys(appComponent.state('districts')).length).toEqual(181);
    expect(appComponent.state('selectedDistricts')).toEqual([]);
    expect(appComponent.state('comparedDistricts')).toEqual({})
  })
})