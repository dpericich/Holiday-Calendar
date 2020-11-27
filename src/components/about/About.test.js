import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../tests/testUtils';
import About from './About';

    const setup = () => {
        return shallow(<About />)
    }

test('check that content displays on the page when About is called by render', () => {
    const wrapper = setup();
    const text = findByTestAttr(wrapper, "about");
    expect(text.length).toBe(2);
    
})