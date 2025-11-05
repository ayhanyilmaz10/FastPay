
import React from 'react';
import { Tabs } from 'expo-router';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import '../global.css';

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="top-[-25px] justify-center items-center"
    style={styles.shadow}
  >
    <View className="w-[70px] h-[70px] rounded-full bg-[#6C63FF]">
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90, // elevation değeri burada zaten tanımlanmış
          ...styles.shadow
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="credit-card" size={24} color={focused ? '#6C63FF' : '#748c94'} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="pie-chart" size={24} color={focused ? '#6C63FF' : '#748c94'} />
          ),
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          tabBarIcon: () => (
            <FontAwesome name="exchange" size={28} color="#FFF" />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tabs.Screen
        name="investing"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="pie-chart" size={24} color={focused ? '#6C63FF' : '#748c94'} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="th-large" size={24} color={focused ? '#6C63FF' : '#748c94'} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});