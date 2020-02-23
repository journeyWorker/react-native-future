module.exports = function(api) {
  api.cache(true);
  return {
    env: {
      production: {
        presets: [
          [
            'babel-preset-expo',
            {
              lazyImports: true,
              web: { disableImportExportTransform: true },
            },
          ],
        ],
        plugins: ['babel-plugin-styled-components', 'lodash'],
      },
      development: {
        presets: [
          [
            'babel-preset-expo',
            {
              lazyImports: true,
              web: { disableImportExportTransform: true },
            },
          ],

        ],
        plugins: ['babel-plugin-styled-components', 'lodash'],
      },
    },
  };
}
