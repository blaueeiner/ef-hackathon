import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import {
  Unbounded_600SemiBold,
  Unbounded_700Bold,
} from '@expo-google-fonts/unbounded';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Asset } from 'expo-asset';
import 'expo-dev-client';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContractScreen from './screens/ContractScreen';
import DashboardScreen from './screens/DashboardScreen';
import SocialScreen from './screens/SocialScreen';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export type RootStackParamList = {
  Welcome: undefined;
  Contract: undefined;
  Dashboard: undefined;
  Social: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const cacheFonts = () => {
  return Font.loadAsync({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Unbounded_600SemiBold,
    Unbounded_700Bold,
  });
};

const cacheImages = () => {
  const images = [];

  return images.map((image) => Asset.fromModule(image).downloadAsync());
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fontAssets = cacheFonts();

        const imageAssets = cacheImages();

        await Promise.all([fontAssets, ...imageAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1" onLayout={onLayoutRootView}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export function Navigation() {
  const [routeName, setRouteName] = useState('Unknown');

  const getActiveRouteName = (
    state: NavigationState | PartialState<NavigationState> | undefined,
  ): string => {
    if (!state || typeof state.index !== 'number') {
      return 'Unknown';
    }

    const route = state.routes[state.index];

    if (route.state) {
      return getActiveRouteName(route.state);
    }

    return route.name;
  };

  const tabItems = [
    {
      name: 'Dashboard',
      component: DashboardScreen,
      icon: 'dashboard',
    },
    {
      name: 'Social',
      component: SocialScreen,
      icon: 'people',
    },
    {
      name: 'My Contract',
      component: ContractScreen,
      icon: 'description',
    },
  ];

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const newRouteName = getActiveRouteName(state);

        if (routeName !== newRouteName) {
          setRouteName(newRouteName);
        }
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            return (
              <MaterialIcons
                name={tabItems.find((item) => item.name == route.name).icon}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {tabItems.map((tabItem, index) => (
          <Tab.Screen
            key={index}
            name={tabItem.name}
            component={tabItem.component}
          />
        ))}
      </Tab.Navigator>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
