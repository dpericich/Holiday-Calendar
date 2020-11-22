import {shallow} from 'enzyme';
import DropDown, {getAvailableDays, getDayForRouting}  from './DropDown';
import {findByTestAttr} from '../../tests/testUtils'

const setup = () => {
    return shallow(<DropDown />)
};

describe("Check that the drop down components render correctly", () => {
    test('check that dropdown renders', () => {
        let wrapper = setup();
        let dropdown = findByTestAttr(wrapper, "dropdown");
        expect(dropdown.length).toBe(1);
    })

    test('check that the submit button is rendering correctly', () => {
        let wrapper = setup();
        let button = findByTestAttr(wrapper, "submit-button");
        expect(button.length).toBe(1);
    })
})

describe("Checking that correct range of dates", () => {
    beforeEach(() => {
        const today = new Date(2020, 10, 20)
    })
    test('check that all dates are returned for the given date', () => {
        const days = [
            {date: "November 5, 2020", dataDate: new Date(2020, 10, 5), question: "What is 1 + 1", answer: 2},
            {date: "November 6, 2020", dataDate: new Date(2020, 10, 6), question: "What is 5 - 4", answer: 1},
            {date: "November 7, 2020", dataDate: new Date(2020, 10, 7), question: "What is 1 + 1", answer: 2},
            {date: "November 8, 2020", dataDate: new Date(2020, 10, 8), question: "What is 5 - 4", answer: 1},
        ];
        const testDropDowns = getAvailableDays(days);
        expect(testDropDowns.length).toBe(4);
    });

    test('check that only the dates that are within range are returned from the days array', () => {
        const days = [
            {date: "November 5, 2030", dataDate: new Date(2030, 10, 5), question: "What is 1 + 1", answer: 2},
            {date: "November 6, 2020", dataDate: new Date(2020, 10, 6), question: "What is 5 - 4", answer: 1},
            {date: "November 7, 2050", dataDate: new Date(2050, 10, 7), question: "What is 1 + 1", answer: 2},
            {date: "November 8, 2020", dataDate: new Date(2020, 10, 8), question: "What is 5 - 4", answer: 1},
        ];
        const testDropDowns = getAvailableDays(days);
        expect(testDropDowns.length).toBe(2);
    })
})

test("tests for the option to route event", () => {
    const testDate = "November 7, 2020";
    const day = getDayForRouting(testDate);
    expect(day).toBe(7);
})








