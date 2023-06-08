import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { VALUE_COLOR_MAP } from '../core/helpers';

type Props = {
  label: string;
  icon: string;
  value: number;
};

export const BreakdownItem = ({ label, value, icon }: Props) => {
  let color = VALUE_COLOR_MAP[value.toPrecision(1)];

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="space-y-4 rounded-lg border border-gray-400 px-6 py-4"
    >
      <View className="flex-row items-center space-x-3 ">
        <MaterialIcons name={icon} size={24} />
        <Text className="font-inter-medium text-base">{label}</Text>
        <View className="flex-1"></View>
        <MaterialIcons name={'chevron-right'} size={24} />
      </View>
      <View className="h-2 w-full rounded-full bg-[#E4E4E4]/40">
        <View
          className="h-2 rounded-full"
          style={{
            width: `${value * 100}%`,
            backgroundColor: color,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};
