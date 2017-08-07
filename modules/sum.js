const sum = (...args) => {

	if (args.includes(undefined) || args.includes(null)) {
		throw new TypeError('All parameters have to be defined')
	}

	else if (!args.every(arg => typeof arg === 'number')) {
		throw new TypeError('All parameters have to be numbers')
	}

	return args.reduce((sum, currentValue) => {
		return sum += currentValue
	}, 0)
}

module.exports = sum