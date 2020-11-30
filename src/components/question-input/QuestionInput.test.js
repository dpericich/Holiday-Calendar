import React from 'react';
import {findByTestAttr} from '../../tests/testUtils';
import QuestionInput, {answerCheck} from './QuestionInput';

describe('test that parts of input section render based on status value', () => {
    describe('test that component renders correctly for null status', () => {
        test('test that FailStatus does not render', () => {

        });
        test('test that text input does render', () => {

        });
        test('test that submit button does render', () => {
            
        })

    })
    describe('test that component renders correctly for false status', () => {
        test('test that FailStatus does render', () => {
            
        });
        test('test that text input does render', () => {

        });
        test('test that submit button does render', () => {
            
        })
        
    })
    describe('test that component renders correctly for true status', () => {
        test('test that SuccessStatus does render', () => {
            
        });
        test('test that text input does not render', () => {

        });
        test('test that submit button does not render', () => {

        })
        
    })
})

describe('test answerCheck function for multiple inputs', () => {
    test('test that a number is returned correctly', () => {

    });
    test('test that a number with comma(s) is returned correctly', () => {

    });
    test('test that a string is returned correctly', () => {

    })
})