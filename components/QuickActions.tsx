
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ActionButton = ({ icon, label, color }: { icon: keyof typeof Ionicons.glyphMap; label: string; color: string; }) => (
  <TouchableOpacity className="items-center">
    <View className={`w-16 h-16 rounded-2xl justify-center items-center mb-2 shadow-md ${color}`}>
      <Ionicons name={icon} size={28} color="#444" />
    </View>
    <Text className="text-sm text-gray-600">{label}</Text>
  </TouchableOpacity>
);

export default function QuickActions() {
  return (
    <View className="mx-5 mt-8">
      <Text className="text-xl font-bold text-gray-800 mb-5">Quick Actions</Text>
      <View className="flex-row justify-around">
        <ActionButton icon="send-outline" label="Send Funds" color="bg-blue-100" />
        <ActionButton icon="people-outline" label="Browse People" color="bg-red-100" />
        <ActionButton icon="document-text-outline" label="Get Reports" color="bg-yellow-100" />
      </View>
    </View>
  );
}