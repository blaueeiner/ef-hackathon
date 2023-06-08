import BottomSheet from '@gorhom/bottom-sheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BarChart } from 'react-native-gifted-charts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from '../App';
import { BreakdownInfoBottomSheet } from '../components/BreakdownInfoBottomSheet';
import { BreakdownItem } from '../components/BreakdownItem';
import { NextPricePackageBottomSheet } from '../components/NextPricePackageBottomSheet';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashboardScreen({ navigation }: Props) {
  const barData = [
    { value: 20, label: 'S', key: '7' },
    { value: 30, label: 'S', key: '6' },
    { value: 90, label: 'M', key: '1' },
    { value: 75, label: 'T', key: '2' },
    { value: 50, label: 'W', key: '3' },
    { value: 100, label: 'T', key: '4' },
    { value: 60, label: 'F', key: '5' },
  ];

  const breakDowndata = [
    {
      label: 'Acceleration',
      value: 0.2,
      icon: 'fast-forward',
      title: 'Accelerate more gently!',
      emoji: '💡',
      body: 'You are accelerating too fast. Try to accelerate more smoothly.',
    },
    {
      label: 'Speed',
      value: 0.15,
      icon: 'speedometer',
      emoji: '💡',
      title: 'Slow down a bit!',
      body: 'You are driving too fast. Watch out for speed limits.',
    },
    {
      label: 'Busy daytime',
      value: 0.4,
      icon: 'clock-outline',
      emoji: '💡',
      title: 'Avoid high traffic!',
      body: 'High traffic increases the chance for crashes',
    },
    {
      label: 'Braking',
      value: 0.6,
      icon: 'car-brake-alert',
      emoji: '💡',
      title: 'Drive more proactively!',
      body: 'You are braking too hard. Try to brake more smoothly.',
    },
    {
      label: 'Weather',
      value: 0.8,
      icon: 'weather-lightning',
      emoji: '✅',
      title: 'Good so far!',
      body: 'You are mostly avoiding to drive during bad weather conditions',
    },
    {
      label: 'Vehicle Condition',
      value: 1.0,
      icon: 'alert',
      emoji: '✅',
      title: 'No maintenance required!',
      body: 'You’re not ignoring any maintenance signals',
    },
  ];

  const [selectedBreakdownIndex, setSelectedBreakdownIndex] =
    useState<number>(0);

  const breakdownInfoBottomSheetRef = useRef<BottomSheet>();

  const nextPricePackageBottomSheetRef = useRef<BottomSheet>();

  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <View className="w-full items-center justify-center space-y-8 p-4">
          <View className="w-full">
            <TouchableOpacity
              activeOpacity={0.7}
              className="w-full items-center justify-center space-y-1 rounded-lg bg-[#16131A] p-6"
              onPress={() => {
                nextPricePackageBottomSheetRef.current?.expand();
              }}
            >
              <View className="w-full">
                <View className="self-end">
                  <MaterialIcons
                    name={'arrow-forward'}
                    color={'white'}
                    size={24}
                  />
                </View>
                <View className="h-44 w-44 self-center">
                  <Image
                    source={require('../../assets/images/score.png')}
                    contentFit="contain"
                    className="flex-1"
                    cachePolicy="memory"
                  />
                </View>
              </View>
              <View className="w-full space-y-2 ">
                <Text className="font-inter-semibold text-center text-xl text-white">
                  Your driving behavior score
                </Text>
                <Text className="font-inter-medium text-center text-sm text-gray-400">
                  Updates every day at midnight
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="w-full space-y-4">
            <Text className="font-inter-semibold text-xl">Last 7 days</Text>
            <View>
              <BarChart
                noOfSections={4}
                spacing={16}
                maxValue={100}
                minValue={0}
                initialSpacing={0}
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                barBorderRadius={4}
                frontColor={'#9B99FF'}
              />
            </View>
          </View>
          <View className="w-full space-y-4">
            <Text className="font-inter-semibold text-xl">Breakdown</Text>
            <View className="space-y-3">
              {breakDowndata
                .sort((a, b) => a.value - b.value)
                .map((item, index) => (
                  <View key={index}>
                    <BreakdownItem
                      label={item.label}
                      value={item.value}
                      icon={item.icon}
                      onPress={() => {
                        setSelectedBreakdownIndex(index);
                        breakdownInfoBottomSheetRef.current?.expand();
                      }}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <BreakdownInfoBottomSheet
        ref={breakdownInfoBottomSheetRef}
        sizePercent={30}
        emoji={breakDowndata[selectedBreakdownIndex].emoji}
        title={breakDowndata[selectedBreakdownIndex].title}
        body={breakDowndata[selectedBreakdownIndex].body}
      />
      <NextPricePackageBottomSheet ref={nextPricePackageBottomSheetRef} />
    </View>
  );
}
