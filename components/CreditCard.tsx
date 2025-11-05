
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface CardProps {
  id: string;
  holderName: string;
  expiry: string;
  last4: string;
  type: 'visa' | 'mastercard';
}

export default function CreditCard({ card }: { card: CardProps }) {
  return (
    <View style={styles.cardShadow} className="mr-5">
      <LinearGradient
        colors={['#8A2BE2', '#4B0082']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-[320px] h-[200px] rounded-2xl p-6 justify-between"
      >
        <Text className="text-white text-2xl font-bold italic">VISA</Text>
        <Text className="text-white text-2xl tracking-widest text-center">
          **** **** **** {card.last4}
        </Text>
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-300 text-xs">Card Holder Name</Text>
            <Text className="text-white text-base font-medium">{card.holderName}</Text>
          </View>
          <View className="items-end">
            <Text className="text-gray-300 text-xs">Expiry Date</Text>
            <Text className="text-white text-base font-medium">{card.expiry}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    }
});