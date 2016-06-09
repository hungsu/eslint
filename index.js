module.exports = {
	rules: {
		'array-bracket-spacing': ["warn", "never"],
		'comma-spacing':         ["error", {"before": false, "after": true }],
		'comma-dangle':          ["error", "never"],
		'indent':                ["warn", "tab"],
		'max-len':               ["warn", 80, {
			ignoreComments: false,
			ignoreUrls: true
		}]
	}
};
