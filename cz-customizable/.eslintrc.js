module.exports = {
	extends: ['standard', 'prettier'],
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	plugins: ['prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': 'error',
	},
}
