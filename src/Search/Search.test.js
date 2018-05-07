import './Search.css';
import React from 'react';
import Search from './Search';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Search Tests', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Search />).toJSON();

    expect(tree).toMatchSnapshot();
  });
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