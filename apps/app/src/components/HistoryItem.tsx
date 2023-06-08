import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  price: number;
  month: string;
  year: number;
};

export const HistoryItem = ({ price, month, year }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row space-y-4 rounded-lg border border-gray-400 px-6 py-4"
    >
      <View className="space-y-1">
        <Text className="font-inter-medium text-lg">€{price}</Text>
        <Text className="font-inter-medium text-base text-gray-400">
          {month} {year}
        </Text>
      </View>
      <View className="flex-1"></View>
      <MaterialIcons name={'chevron-right'} size={24} />
    </TouchableOpacity>
  );
};
