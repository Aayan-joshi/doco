import { images } from "@/constants/images";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const { height, width } = useWindowDimensions();
  const isCompact = height < 820;
  const mascotSize = Math.min(width - 60, isCompact ? 286 : height * 0.36);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View
        className="flex-1 px-10"
        style={{
          paddingTop: isCompact ? 12 : 20,
          paddingBottom: isCompact ? 18 : 24,
        }}
      >
        <View className="items-center">
          <View className="flex-row items-center gap-3">
            <Image
              source={images.mascotLogo}
              className="h-[58px] w-[58px]"
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-[36px] leading-[44px] text-text-primary">
              doco
            </Text>
          </View>
        </View>

        <View style={{ marginTop: isCompact ? 34 : 52 }}>
          <Text className="font-poppins-bold text-[40px] leading-[52px] text-text-primary">
            Your Japanese
          </Text>
          <Text className="font-poppins-bold text-[40px] leading-[52px] text-lingua-deep-purple">
            teacher.
          </Text>
          <Text className="mt-5 max-w-[330px] font-poppins text-[18px] leading-[32px] text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="relative flex-1 items-center justify-end">
          <View className="absolute left-0 top-[22px] rounded-[18px] bg-[#F0F8FF] px-6 py-4">
            <Text className="font-poppins-medium text-[24px] leading-[30px] text-text-primary">
              Hello!
            </Text>
          </View>

          <View
            className="absolute right-[4px] top-0 rounded-[18px] bg-[#F7F5FF] px-6 py-4"
            style={{ transform: [{ rotate: "10deg" }] }}
          >
            <Text className="font-poppins-medium text-[24px] leading-[30px] text-lingua-deep-purple">
              ¡Hola!
            </Text>
          </View>

          <View className="absolute right-[-8px] top-[118px] rounded-[18px] bg-[#FFF4EF] px-6 py-4">
            <Text className="font-poppins-medium text-[24px] leading-[30px] text-error">
              你好!
            </Text>
          </View>

          <Image
            source={images.mascotWelcome}
            className="mb-1"
            resizeMode="contain"
            style={{ height: mascotSize, width: mascotSize }}
          />
        </View>

        <View className="lingua-button lingua-button--primary flex-row justify-between px-8">
          <View className="w-8" />
          <Text className="lingua-button__text">Get Started</Text>
          <Text className="font-poppins-medium text-[42px] leading-[44px] text-white">
            ›
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
