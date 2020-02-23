const { withAlias } = require('@expo/webpack-config/addons');
const { resolve } = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ROOT_FOLDER = resolve(__dirname);

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  const constWithAlias = withAlias(config, {
    'lottie-react-native': 'lottie-web',
    src: `${ROOT_FOLDER}/src`,
  });
  return constWithAlias;
};
