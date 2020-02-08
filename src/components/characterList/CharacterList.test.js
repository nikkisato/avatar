import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('renders CharacterList', () => {
    const wrapper = shallow(<CharacterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
