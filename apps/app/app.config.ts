/* eslint-disable turbo/no-undeclared-env-vars */
import * as dotenv from 'dotenv';
import { ConfigContext, ExpoConfig } from 'expo/config';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'EF Hackathon App',
  slug: 'ef-hackathon',
  ios: {
    ...config.ios,
    googleServicesFile:
      process.env.ENVIRONMENT === 'production' ||
      process.env.EAS_BUILD_PROFILE === 'production'
        ? './config/production/GoogleService-Info.plist'
        : './config/staging/GoogleService-Info.plist',
  },
  android: {
    ...config.android,
    googleServicesFile:
      process.env.ENVIRONMENT === 'production' ||
      process.env.EAS_BUILD_PROFILE === 'production'
        ? './config/production/google-services.json'
        : './config/staging/google-services.json',
  },
  extra: {
    ...config.extra,
    apiBaseUrl: process.env.API_BASE_URL,
  },
  plugins: [
    [
      'expo-tracking-transparency',
      {
        userTrackingPermission:
          'Your data will be used to deliver personalized ads to you.',
      },
    ],
    '@react-native-firebase/app',
    '@react-native-firebase/auth',
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow $(PRODUCT_NAME) to access your photos',
        cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera.',
      },
    ],
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
});
