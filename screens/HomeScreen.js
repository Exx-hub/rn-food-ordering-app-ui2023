import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { categories, foodItems } from "../data/dummyData";
import TextCategory from "../components/TextCategory";
import FoodCard from "../components/FoodCard";

import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("Burger");

  const { height, width } = useWindowDimensions();

  return (
    <View className="flex-1 relative">
      <Image
        source={require("../assets/images/background.png")}
        blurRadius={70}
        className="absolute h-full w-full"
      />

      <View className="pt-10">
        {/* burger and avatar  */}
        <View className="flex-row justify-between mx-4">
          <Pressable className="p-3 bg-white shadow-md rounded-2xl">
            <Bars3CenterLeftIcon size={30} color="black" />
          </Pressable>
          <Pressable className="rounded-2xl bg-white/70 p-[3px]">
            <Image
              source={require("../assets/images/linkedin.jpeg")}
              className="h-12 w-12 rounded-2xl "
            />
          </Pressable>
        </View>
        {/* HOME Screen Heading  */}
        <View className="my-12 mx-auto">
          <Text className="text-5xl">
            Fast and <Text className="font-bold">Delicious</Text> Food
          </Text>
        </View>

        {/* Search Input Component  */}
        <View className="flex-row justify-between items-center mx-4 space-x-3">
          <View className="flex-row items-center flex-1 p-3 rounded-xl space-x-1 bg-white">
            <MagnifyingGlassIcon color="gray" stroke={40} size={25} />
            <TextInput placeholder="Search" value={searchInput} className="text-gray-800 w-[80%]" />
          </View>
          <Pressable className="p-3 bg-white shadow-md rounded-2xl">
            <AdjustmentsHorizontalIcon color="black" />
          </Pressable>
        </View>

        {/* food categories  */}
        <ScrollView
          className="max-h-20 mt-6 pt-6"
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => {
            let isActive = item.name === activeCategory;

            return (
              <Animatable.View key={item.id} delay={index * 120} animation="slideInDown">
                <TouchableOpacity onPress={() => setActiveCategory(item.name)}>
                  <TextCategory name={item.name} isActive={isActive} />
                </TouchableOpacity>
              </Animatable.View>
            );
          })}
        </ScrollView>

        {/* featured food cards  */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {foodItems.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
