import { View, Text, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({ name, price, ingredients, image, desc }) => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  //   console.log(image);

  const handlePress = () => {
    navigation.navigate("FoodDetails", { name, image, desc, price });
  };

  return (
    <View className="bg-white/20 rounded-3xl p-3 py-5 my-5 mr-6 w-56">
      <View className="items-center">
        <Image source={image} className={height < 700 ? "h-20 w-20" : "h-32 w-32"} />
      </View>
      <View className="px-3 py-2">
        <Text className="text-white text-xl font-medium tracking-wider">{name}</Text>
        <Text className="text-white">{ingredients}</Text>
      </View>

      <View className={`flex-row justify-between items-center px-1 ${height > 700 ? "mt-5" : ""}`}>
        <Text className="text-white font-semibold text-2xl">${price}</Text>
        <TouchableOpacity className="bg-white rounded-full p-2" onPress={handlePress}>
          <ShoppingBagIcon size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;
