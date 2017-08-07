const sum = (...args) => {
	return args.reduce((sum, currentValue) => sum += currentValue,0)
}

module.exports = sum