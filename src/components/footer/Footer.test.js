import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../tests/testUtils';

/**
 * Factory function to create ShallowWrapper for the Footer Component
 * @function setup
 * @return {ShallowWrapper}
 */

 const setup = () => {
     return shallow(<Footer />)
 }

test('renders footer component', () => {
    const wrapper = setup();
    const footer = findByTestAttr(wrapper, 'footer');
    expect(footer.length).toBe(1);
})