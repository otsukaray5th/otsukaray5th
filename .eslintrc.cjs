module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'google',
		'eslint:recommended',
		'@nuxtjs/eslint-config',
		'plugin:vue/vue3-essential',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', '.prettierrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			env: {
				node: true,
			},
			files: ['**/*.model.ts'],
			rules: {
				'new-cap': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-undef': 'off',
		'require-jsdoc': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-html': 'off',
		'no-invalid-this': 'off',
	},
}
