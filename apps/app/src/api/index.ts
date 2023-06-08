/* eslint-disable turbo/no-undeclared-env-vars */
import Constants from 'expo-constants';
import { Configuration } from './generated';

console.log(Constants.expoConfig.extra?.apiBaseUrl);

const configuration = new Configuration({
  basePath: Constants.expoConfig.extra?.apiBaseUrl,
});

// TODO: Add apis here
