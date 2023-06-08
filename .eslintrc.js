module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    'jsx-a11y/alt-text': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
  },
};
