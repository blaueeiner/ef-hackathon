import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import React, {
  MutableRefObject,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends Partial<BottomSheetProps> {
  sizePercent: number;
  title: string;
  body: string;
  emoji: string;
}

export const BreakdownInfoBottomSheet = forwardRef<BottomSheet, Props>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['55%'], []);

    const renderBackdrop = useCallback(
      (props) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        {...props}
      >
        <SafeAreaView className="flex-1 space-y-4 p-6" edges={['bottom']}>
          <View className="space-y-4">
            <Text className="font-inter-bold text-center text-3xl">
              {props.emoji}
            </Text>
            <Text className="font-inter-bold text-center text-3xl">
              {props.title}
            </Text>
            <Text className="font-inter-regular text-center text-xl">
              {props.body}
            </Text>
          </View>

          <View className="flex-1" />

          <TouchableOpacity
            activeOpacity={0.7}
            className="rounded-full bg-[#EAEBF1] px-6 py-4 font-bold text-white"
            onPress={() => {
              (ref as MutableRefObject<BottomSheet>).current.close();
            }}
          >
            <Text className="font-inter-semibold text-center text-base text-black">
              Dismiss
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </BottomSheet>
    );
  },
);
