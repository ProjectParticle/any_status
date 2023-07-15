module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['aws-cdk', 'npm-login', 'shared', 'ui-react']],
  },
};
