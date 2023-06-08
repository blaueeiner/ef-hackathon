import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { HistoryItem } from '../components/HistoryItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Contract'>;

export default function ContractScreen({ navigation }: Props) {
  const historyData = [
    {
      price: 44.99,
      month: 'May',
      year: 2023,
    },
    {
      price: 39.99,
      month: 'April',
      year: 2023,
    },
    {
      price: 54.99,
      month: 'March',
      year: 2023,
    },
  ];
  return (
    <ScrollView className="flex-1">
      <View className="items-center justify-center space-y-8 p-4">
        <View className="w-full items-center justify-center space-y-1 rounded-lg bg-[#16131A] p-6">
          <View className="w-full space-y-2 ">
            <Text className="font-inter-semibold text-center text-2xl text-white">
              €34.99 / month
            </Text>
            <Text className="font-inter-medium text-center text-sm text-gray-400">
              Based on your last 30 days of driving.
            </Text>
          </View>
        </View>

        <View className="w-full space-y-4">
          <Text className="font-inter-semibold text-xl">History</Text>
          <View className="space-y-3">
            {historyData.map((item, index) => (
              <View key={index}>
                <HistoryItem
                  month={item.month}
                  price={item.price}
                  year={item.year}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
