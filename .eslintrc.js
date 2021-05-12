module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
		// es6: true
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017
	},
	extends: [
		// '@nuxtjs'
		// 'plugin:nuxt/recommended'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		indent: ['warn', 'tab']
	}
}
