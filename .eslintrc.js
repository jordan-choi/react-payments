module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};