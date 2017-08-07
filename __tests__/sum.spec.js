const sum = require('../modules/sum1.js')

describe('sum function', () => {
	test('sums 2 numbers, that can be reversed', () => {
		expect(sum(1, 2)).toBe(3)
		expect(sum(2, 1)).toBe(3)
	})

	test('return number if 1 argument passed', () => {
		expect(sum(69)).toBe(69)
	})

	
	test('sums unknown quantity of arguments', () => {
		expect(sum(1, 2, 3)).toBe(6)
	})
})

