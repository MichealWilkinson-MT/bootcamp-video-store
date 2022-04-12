const { calculate_cost } = require('../generate_report');

it('Should calculate a cost of £2 for a regular movie one day rental',  () => {
    expect(calculate_cost('REGULAR', 1)).toEqual(2.00)
});

it('Should calculate a cost of £3 for a new release movie one day rental', () => {
    expect(calculate_cost('NEW_RELEASE', 1)).toEqual(3.00)
});