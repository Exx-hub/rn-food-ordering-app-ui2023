import { View, Text, Pressable, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";

import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "react-native-heroicons/outline";

import * as Animatable from "react-native-animatable";

const FoodDetails = ({ navigation, route }) => {
  const { height } = useWindowDimensions();

  return (
    <View className="flex-1 bg-white">
      <Image
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        source={require("../assets/images/background.png")}
        blurRadius={40}
        className="h-96 w-full absolute"
      />

      <View className="pt-10">
        {/* icons */}
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            className="bg-white p-3 rounded-2xl shadow-md"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={23} stroke={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-2xl shadow-md">
            <HeartIcon size={23} color="black" />
          </TouchableOpacity>
        </View>

        {/* image and title  */}
        <View className="items-center justify-center">
          <Image source={route?.params?.image} className="w-48 h-48" />
          <Text className="text-3xl text-white">{route?.params?.name}</Text>
        </View>

        {/* add minus buttons  */}
        <View className="flex-row justify-center items-center mt-6 translate-y-4">
          <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
              <MinusIcon size="20" strokeWidth={1.8} color="black" />
            </TouchableOpacity>
            <Text className="text-xl">1</Text>
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
              <PlusIcon size="20" strokeWidth={1.8} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* icons  */}
        <View className="flex-row mt-8 mb-5 justify-between mx-4 overflow-hidden">
          <Animatable.View
            animation="slideInDown"
            delay={120}
            className="items-center justify-center"
          >
            <Image source={require("../assets/icons/calories.png")} className="h-6 w-6" />
            <Text className="font-bold mt-1">130 cal</Text>
          </Animatable.View>

          <Animatable.View
            animation="slideInDown"
            delay={180}
            className="items-center justify-center"
          >
            <Image source={require("../assets/icons/clock.png")} className="h-6 w-6" />
            <Text className="font-bold mt-1">15-20 min</Text>
          </Animatable.View>

          <Animatable.View
            animation="slideInDown"
            delay={180}
            className="items-center justify-center"
          >
            <Image source={require("../assets/icons/love.png")} className="h-6 w-6" />
            <Text className="font-bold mt-1">4.6 vote</Text>
          </Animatable.View>

          <Animatable.View
            animation="slideInDown"
            delay={180}
            className="items-center justify-center"
          >
            <Image source={require("../assets/icons/weight.png")} className="h-6 w-6" />
            <Text className="font-bold mt-1">350 g</Text>
          </Animatable.View>
        </View>

        {/* Description  */}
        <Animatable.View
          animation="slideInUp"
          delay={180}
          className={`mx-4 ${height > 700 ? "mb-28" : "mb-4"}`}
        >
          <Text className="font-bold text-3xl mb-2">Description</Text>
          <Text className="text-black/60">{route?.params?.desc}</Text>
        </Animatable.View>

        {/* price and add to cart button  */}

        <View className="flex-row mx-4 justify-between items-center">
          <Animatable.Text delay={100} animation="slideInLeft" className="font-bold text-2xl">
            $13.40
          </Animatable.Text>
          <Animatable.View delay={100} animation="slideInRight">
            <TouchableOpacity className="items-center justify-center px-4 py-2 rounded-lg bg-black/90">
              <Text className="text-white font-bold">Add to Cart</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetails;
