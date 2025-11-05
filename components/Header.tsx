
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View className="flex-row justify-between items-center px-5 pt-3">
      <Text className="text-2xl font-bold">FastPay</Text>
      <View className="flex-row items-center">
        <TouchableOpacity className="mr-4">
          <Ionicons name="notifications-outline" size={26} color="#333" />
        </TouchableOpacity>
        <Image
          source={require('../assets/avatar.png')}
          className="w-10 h-10 rounded-full"
        />
      </View>
    </View>
  );
}