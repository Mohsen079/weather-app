import { POPULAR_CITIES } from "@/data";
import { useGeoAPI } from "@/hooks";
import { storage, STORAGE_KEYS } from "@/utils";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Search() {


    const [value, setValue] = useState("")
    const { data, isLoading, isError } = useGeoAPI(value, 500)
    console.log("data", data)
    const result = data?.results || []
    const isSearching = value.trim().length > 2
    const trueResult = isSearching ? result : POPULAR_CITIES
    const route = useRouter()


    const handleSelect = async (city) => {
        const storaged = {
            name: city.name,
            country: city.country,
            latitude: city.latitude,
            longitude: city.longitude,
        };
        await storage.set(STORAGE_KEYS.SELECTED_CITY, storaged)
        route.push("/");
    };

    return <>
        <SafeAreaView className="bg-gray-300 h-full">

            <View className="flex-row items-center justify-between gap-2 bg-gray-300 p-3">
                <Pressable onPress={() => route.push("/")} className=" rounded-full p-1 w-9 h-9 items-center justify-center bg-gray-200 duration-300 hover:bg-gray-300 hover:scale-90  "><Text className="font-teen text-sm">Back</Text></Pressable>
                <View className="flex-row bg-gray-200 w-[88%] mx-3 rounded-full px-2 py-1 h-9 items-center ">
                    <Text>🔍</Text>
                    <TextInput placeholderTextColor="#9ca3af"
                        value={value}
                        onChangeText={setValue}
                        placeholder="Search Location" className="ml-3 text-gray-900 outline-none"></TextInput>
                </View>
            </View>

            {isLoading && isSearching && <ActivityIndicator className="mt-4" color="#3b82f6" />}

            {isError && <Text className="text-red-500 text-center mt-4">
                Something went wrong. Try again.
            </Text>}


            {isSearching && !isLoading && !isError && result.length > 2 && (
                <Text className="text-gray-500 text-center mt-4">
                    cities Not found.
                </Text>
            )}


            <Text className="my-2 ml-3 font-semibold">{isLoading && !isError ? "looking for city.." : !isError && !isLoading ? "POPULAR CITIES ⭐" : ""}</Text>
            <FlatList className=""
                data={trueResult}
                keyExtractor={(item, index) => item.id?.toString() ?? `${item.name}-${item.latitude}-${index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handleSelect(item)} className="my-1 mx-3 px-3 py-1 rounded-xl shadow bg-gray-100 flex-row justify-between items-center duration-300 hover:bg-gray-200">
                        <View className="flex gap-1 py-1">
                            <Text className="font-bold">{item.country}</Text>
                            <Text>{item.name}</Text>
                        </View>
                        <Text className="bg-blue-400 px-2 py-1 rounded-xl text-center text-white duration-300 hover:bg-blue-600">Select</Text>
                    </Pressable>
                )}

            />
        </SafeAreaView>

    </>
}  