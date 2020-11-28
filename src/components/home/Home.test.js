import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../tests/testUtils';
import Home from './Home';
import {questionProgress} from './translate';

const setup = shallow(<Home />)

describe('test multiple inputs for questionProgress function', ()=> {
    const obj = {1: true, 2: true, 3: null, 4: true, 5: null,
                6: null, 7: true, 8: true, 9: true, 10: null}
    test('test that the length of the array is equal to the full cycles run', () => {
        const result = questionProgress(obj);
        expect(result.length).toBe(5);
    });
    test('test that calculated value is correct for test obj - section 1', () => {
        const result = questionProgress(obj);
        const secondSection = result[0];
        expect(secondSection).toBe(2);
    });
    test('test that calculated value is correct for test obj - section 2', () => {
        const result = questionProgress(obj);
        const secondSection = result[1];
        expect(secondSection).toBe(3);
    });
})

describe('test that all elements are correctly rendering for element', () => {
    test('test that dropdown is rendering', () => {
    });
    test('test that 5 Translate components ar rendering', () => {
    });
})
