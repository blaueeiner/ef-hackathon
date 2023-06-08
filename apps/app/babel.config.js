module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'transform-inline-environment-variables',
      // [
      //   'module:react-native-dotenv',
      //   {
      //     moduleName: '@env',
      //     envName: 'APP_ENV',
      //     safe: false,
      //     allowUndefined: true,
      //   },
      // ],
      'react-native-reanimated/plugin',
    ],
  };
};
