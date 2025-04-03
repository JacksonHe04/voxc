module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // 修改这里，添加 ./ 前缀
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // 添加 ignores 配置
  // ignores: [ // 删除这个配置
  ignorePatterns: [
    // 使用这个配置
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
    '.eslintrc.js',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
