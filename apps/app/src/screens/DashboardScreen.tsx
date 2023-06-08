import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { RootStackParamList } from '../App';
import { BreakdownItem } from '../components/BreakdownItem';

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
    { label: 'Acceleration', value: 0.2, icon: 'speed' },
    { label: 'Speed', value: 0.15, icon: 'speed' },
    { label: 'Busy daytime', value: 0.4, icon: 'speed' },
    { label: 'Braking', value: 0.6, icon: 'speed' },
    { label: 'Weather', value: 0.8, icon: 'speed' },
    { label: 'Vehicle Condition', value: 1.0, icon: 'speed' },
  ];

  return (
    <ScrollView className="flex-1">
      <View className="items-center justify-center space-y-8 p-4">
        <View className="w-full items-center justify-center space-y-1 rounded-lg bg-[#16131A] p-6">
          <View className="h-40 w-40">
            <Image
              source={require('../../assets/images/score.png')}
              contentFit="contain"
              className="flex-1"
              cachePolicy="memory"
            />
          </View>
          <View className="w-full space-y-2 ">
            <Text className="font-inter-semibold text-center text-xl text-white">
              Your driving behavior score
            </Text>
            <Text className="font-inter-medium text-center text-sm text-gray-400">
              Updates every day at midnight
            </Text>
          </View>
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
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
