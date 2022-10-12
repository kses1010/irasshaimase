const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];

    config.resolve.alias = {
      ...config.resolve.alias,
      // '@components': path.resolve(__dirname, '../src/components'),
      // '@emotion/core': require.resolve('@emotion/react'),
      // 'emotion-theming': require.resolve('@emotion/react'),
      // 'next/router': require.resolve('./__mocks__/router.js'),
    };

    return config;
  },
  babel: async (options) => ({
    ...options,
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        },
      ],
    ],
    plugins: [...(options.plugins || []), 'react-require', '@emotion/babel-plugin'],
  }),
};
