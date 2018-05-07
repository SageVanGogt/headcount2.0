import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import '../setupTests';

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

  it('Should render with the correct default state', () => {
    const appComponent = shallow(<App />)

    expect(Object.keys(appComponent.state('districts')).length).toEqual(181);
    expect(appComponent.state('selectedDistricts')).toEqual([]);
    expect(appComponent.state('comparisonData')).toEqual({})
  })

  it('Should set the state of selectedDistricts to the data of the first district passed in', () => {
    const appComponent = shallow(<App />)
    appComponent.instance().handleSelect('COLORADO');
    const expectedDistrict = { 
      location: 'COLORADO',
      data:
        { '2004': 0.24,
          '2005': 0.278,
          '2006': 0.337,
          '2007': 0.395,
          '2008': 0.536,
          '2009': 0.598,
          '2010': 0.64,
          '2011': 0.672,
          '2012': 0.695,
          '2013': 0.703,
          '2014': 0.741 
        },
      selected: true
   }

    expect(appComponent.state('selectedDistricts')[0]).toEqual(expectedDistrict)
  })

  it('Should set the state of selectedDistricts to the data of the second district passed in', () => {
    const appComponent = shallow(<App />)
    appComponent.instance().handleSelect('ACADEMY 20');
    appComponent.instance().handleSelect('DENVER COUNTY');
    const expectedDistrict = {
      "location": "DENVER COUNTY 1",
      "data": {
        "2004": 0.518,
        "2005": 0.632,
        "2006": 0.667,
        "2007": 0.722,
        "2008": 0.875,
        "2009": 0.93,
        "2010": 0.945,
        "2011": 0.948,
        "2012": 0.97,
        "2013": 0.993,
        "2014": 0.995
      },
      "selected": true
    }
   appComponent.update()
    
    expect(appComponent.state('selectedDistricts')[1]).toEqual(expectedDistrict)
  })

  it('Should set the state of selectedDistricts at index 1 to the data of the latest district passed in', () => {
    const appComponent = shallow(<App />)
    appComponent.instance().handleSelect('EDISON 54 JT');
    appComponent.instance().handleSelect('ELBERT 200');
    appComponent.instance().handleSelect('DEL NORTE C-7');

    const expectedDistrict = {
      "location": "DEL NORTE C-7",
      "data": {
        "2004": 0,
        "2005": 0,
        "2006": 1,
        "2007": 1,
        "2008": 1,
        "2009": 1,
        "2010": 0,
        "2011": 0,
        "2012": 0,
        "2013": 0,
        "2014": 1
      },
      "selected": true
    }
   appComponent.update()
    
    expect(appComponent.state('selectedDistricts')[1]).toEqual(expectedDistrict)
  })

  it('Should update the state of comparisonData when districts are passed in', () => {
    const appComponent = shallow(<App />)
    appComponent.instance().compareDistricts([
      {
        "location": "DEL NORTE C-7",
        "data": {
          "2004": 0,
          "2005": 0,
          "2006": 1,
          "2007": 1,
          "2008": 1,
          "2009": 1,
          "2010": 0,
          "2011": 0,
          "2012": 0,
          "2013": 0,
          "2014": 1
        }
      },
      {
        "location": "DENVER COUNTY 1",
        "data": {
          "2004": 0.518,
          "2005": 0.632,
          "2006": 0.667,
          "2007": 0.722,
          "2008": 0.875,
          "2009": 0.93,
          "2010": 0.945,
          "2011": 0.948,
          "2012": 0.97,
          "2013": 0.993,
          "2014": 0.995
        }
      }
    ])
    
    const expectedComparison = { 
      'DEL NORTE C-7': 0.455,
      compared: 0.544,
      'DENVER COUNTY 1': 0.836 
  }

  expect(appComponent.state('comparisonData')).toEqual(expectedComparison)
  })

  it('Should filter the districts with the event value', () => {
    const appComponent = shallow(<App />)
    const e = {
      target: {
        value: 'Colo'
    }}

    appComponent.instance().handleSearchEvent(e)
    
    expect(appComponent.state('districts').length).toEqual(2)
  })

  it('Should update state with all districts if the value is an empty string', () => {
    const appComponent = shallow(<App />)

    const e = {
      target: {
        value: ''
      }
    }

    appComponent.instance().handleSearchEvent(e)
    appComponent.update()

    expect(Object.keys(appComponent.state('districts')).length).toEqual(181)
  })

  it('Should update dsitricts state to be empty if the value doesn\'t match any cards', () => {
    const appComponent = shallow(<App />);

    const e = {
      target: {
        value: 'jaskd'
      }
    }

    appComponent.instance().handleSearchEvent(e)

    expect(appComponent.state('districts').length).toEqual(0)
  })
})