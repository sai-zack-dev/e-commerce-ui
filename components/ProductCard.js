import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';

export default function ProductCard({
    thumbnail,
    category,
    title,
    price,
    description
}) {
    const [count, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme();
    return (
        <View className="flex-row gap-5 p-5 bg-white dark:bg-gray-700">
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}