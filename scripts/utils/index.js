const { isDev, isProd } = require('../env');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoaders = (importLoaders, props) => [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      ...props,
      sourceMap: isDev,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          require('postcss-flexbugs-fixes'),
          isProd && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
                flexbox: 'no-2009',
              },
              stage: 3,
            },
          ],
        ].filter(Boolean),
      },
    },
  },
];

module.exports = {
  getCssLoaders,
};
