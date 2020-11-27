import React from 'react';
import {shallow} from 'enzyme';
import Navbar from './Navbar';
import HomeButton from '../home-button/HomeButton';

const setup = () => {
    return shallow(<Navbar />);
}

test('check that home button renders with the navbar', () => {
    const wrapper = setup();
    expect(wrapper.contains(<HomeButton />)).toBe(true);
    
})