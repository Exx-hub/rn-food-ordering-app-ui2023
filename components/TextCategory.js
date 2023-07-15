import { View, Text, Image } from "react-native";
import React from "react";

const TextCategory = ({ name, isActive }) => {
  return (
    <View className="items-center mr-6">
      <Text className={`text-lg  ${isActive ? "font-bold text-white" : "text-white/70"}`}>
        {name}
      </Text>
      {isActive ? (
        <Image source={require("../assets/images/line.png")} className="h-4 w-5" />
      ) : null}
    </View>
  );
};

export default TextCategory;
