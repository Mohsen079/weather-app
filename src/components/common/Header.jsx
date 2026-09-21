import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

function Header({ data }) {


    const router = useRouter()
    const { city } = data || {};



    return <>
        <View className="flex-row items-center justify-between bg-gray-300 px-5 my-5 py-2 px-3 ">
            <View className="justify-start flex">
                <Text className="text-gray-700 text-lg  font-semibold ">Current Location</Text>
                <Text className="text-gray-700 text-2xl font-bold">{city}</Text>
            </View>

            <Pressable onPress={() => router.push("/search")} className="rounded-full bg-gray-200 p-2 text-center duration-300 hover:bg-gray-300 hover:scale-90">
                <Text className="text-2xl">🔍</Text>
            </Pressable>
        </View>
    </>
}

export default Header;