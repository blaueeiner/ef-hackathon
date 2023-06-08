import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Social'>;

export default function SocialScreen({ navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Social</Text>
    </View>
  );
}
