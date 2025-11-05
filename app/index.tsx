
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Header from '../components/Header';
import CreditCard, { CardProps } from '../components/CreditCard';
import BalanceCard from '../components/BalanceCard';
import QuickActions from '../components/QuickActions';


const CARDS_DATA: CardProps[] = [
  { id: '1', holderName: 'John Green', expiry: '06/27', last4: '1234', type: 'visa' },
  { id: '2', holderName: 'John Green', expiry: '08/28', last4: '5678', type: 'mastercard' },
  { id: '3', holderName: 'John Green', expiry: '12/25', last4: '9012', type: 'visa' },
];

export default function WalletScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View className="mt-5 h-[220px]">
          <FlatList
            data={CARDS_DATA}
            renderItem={({ item }) => <CreditCard card={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={320 + 20} // Kart genişliği + margin
            contentContainerStyle={{ paddingHorizontal: 20 }}
          />
        </View>

        <BalanceCard />
        <QuickActions />

        <View className="px-5 mt-8 mb-32">
          <Text className="text-xl font-bold text-gray-800">Transactions</Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}