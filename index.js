module.exports = {
	rules: {
		'comma-dangle': ["error", "never"],
		'indent': ["warn", "tab"],
		'max-len': [1, 80, 4, {
			ignoreComments: true,
			ignoreUrls: true
		}]
	}
};
