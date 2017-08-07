const sum = (...args) => {

	if(args.includes(undefined) || args.includes(null)) {
		throw new TypeError('All parameters have to been defined')
	}

	return args.reduce((sum, currentValue) => sum += currentValue,0)
}

module.exports = sum