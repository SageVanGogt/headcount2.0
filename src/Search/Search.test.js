import './Search.css';
import React from 'react';
import Search from './Search';
import { shallow, mount } from 'enzyme';

describe('Search Tests', () => {
  it('renders', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toHaveLength(1);
  });
  it('Should call HandleSearchEvent onChange', () => {
    const props = {
      handleSearchEvent: jest.fn()
    };
    const mockEvent = {target: {value: 'col'}};
    const component = shallow(<Search {...props} />);

    component.find('input').simulate('change', mockEvent);
    expect(props.handleSearchEvent).toHaveBeenCalled();
    expect(props.handleSearchEvent).toBeCalledWith(mockEvent);
  });
});