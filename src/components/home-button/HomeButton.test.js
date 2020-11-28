import React from 'react';
import HomeButton from './HomeButton';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../tests/testUtils'

const setup = () => {
    return shallow(<HomeButton />);
}

test('check that home button icon renders in button', () => {
    const wrapper= setup();
    const icon = findByTestAttr(wrapper, 'icon');
    expect(icon.length).toBe(1);
})