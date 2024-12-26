import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductCard({
  thumbnail,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="bg-black/10 dark:bg-blue-50/10 rounded-3xl p-5 my-5">
      <View className="rounded-2xl overflow-hidden">
        <Image source={{ uri: thumbnail }} className="w-full h-96" />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row items-center gap-3">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${(price * count).toFixed(2)}
          </Text>
        </View>
        <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">{description}</Text>
        <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-green-500 dark:bg-sky-300 p-3 rounded-full">
            <Text className="text-white dark:text-black font-bold">Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
