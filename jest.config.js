module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testPathIgnorePatterns: ['./node_modules/'],
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('router-'),
  },
};
