// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// const modulePaths = require('./packager/modulePaths');
const { resolve } = require('path');
// const fs = require('fs');
const { getDefaultConfig } = require('metro-config');
// Update the following line if the root folder of your app is somewhere else.
const SRC_FOLDER = resolve(__dirname, 'src');


module.exports = (async () => {
  const {
    resolver: { sourceExts , assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      resolverMainFields: ['react-native', 'main'],
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      platforms: ['ios', 'android', 'web'],
      extraNodeModules: {
        src: SRC_FOLDER,
      },
    },
  };
})();
