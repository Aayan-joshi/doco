import { images } from "@/constants/images";
import { Link } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="lingua-card items-center">
          <View className="flex-row items-center gap-5">
            <Image
              source={images.mascotLogo}
              className="h-20 w-20"
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-[52px] leading-[64px] text-text-primary">
              lingua
            </Text>
          </View>
        </View>

        <View className="lingua-section">
          <Text className="label text-lingua-purple">Colors</Text>
          <View className="mt-4 flex-row flex-wrap gap-4">
            <View className="h-20 w-20 rounded-card-sm bg-lingua-purple" />
            <View className="h-20 w-20 rounded-card-sm bg-lingua-deep-purple" />
            <View className="h-20 w-20 rounded-card-sm bg-lingua-blue" />
            <View className="h-20 w-20 rounded-card-sm bg-lingua-green" />
            <View className="h-20 w-20 rounded-card-sm bg-streak" />
            <View className="h-20 w-20 rounded-card-sm bg-error" />
          </View>
        </View>

        <View className="lingua-section lingua-card gap-5">
          <Text className="label text-lingua-purple">Typography</Text>
          <Text className="h1">H1 Page Title</Text>
          <Text className="h2">H2 Section Title</Text>
          <Text className="h3">H3 Card Title</Text>
          <Text className="h4">H4 Subheading</Text>
          <Text className="body-lg">
            Body Large for important content and friendly descriptions.
          </Text>
          <Text className="body-md">
            Body Medium for standard body text.
          </Text>
          <Text className="caption">
            Caption text for labels and meta text.
          </Text>
        </View>

        <View className="lingua-section gap-5">
          <Link href="/onboarding" asChild>
            <Pressable className="lingua-button lingua-button--primary">
              <Text className="lingua-button__text">Open Onboarding</Text>
            </Pressable>
          </Link>
          <View className="lingua-input justify-center">
            <Text className="body-md">alex@gmail.com</Text>
          </View>
          <View className="lingua-progress">
            <View className="lingua-progress__bar w-3/5" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
