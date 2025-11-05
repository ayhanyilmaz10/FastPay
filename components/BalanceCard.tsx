// components/BalanceCard.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
// @expo/vector-icons kütüphanesinden Ionicons kullanılıyor.
import { Ionicons } from '@expo/vector-icons';

export default function BalanceCard() {
  return (
    <View className="bg-white rounded-2xl p-5 mx-5 mt-5 shadow-sm">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png' }}
            className="w-8 h-5 rounded mr-3"
          />
          <Text className="text-base font-medium">USD</Text>
        </View>
        <Text className="text-3xl font-bold text-green-600">15402.01</Text>
      </View>
      <View className="mt-4 pt-4 border-t border-gray-100 flex-row justify-between items-center">
        <Text className="text-sm text-gray-500">IBAN 1222 **** **** 1010</Text>
        <TouchableOpacity>
          {/* İkon adı: 'chevron-forward-outline' */}
          <Ionicons name="chevron-forward-outline" size={24} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}