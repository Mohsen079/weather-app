import { DEFAULT_CITY } from "@/data";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Search() {


    return <>


        <SafeAreaView className="bg-gray-300">

            <View className="flex-row items-center justify-between gap-2 bg-gray-300 p-3">
                <Pressable className=" rounded-full p-1 w-9 h-9 items-center justify-center bg-gray-200 duration-300 hover:bg-gray-300 hover:scale-90  "> <Text className="font-teen text-sm">Back</Text></Pressable>
                <View className="flex-row bg-gray-200 w-[88%] mx-3 rounded-full px-2 py-1 h-9 items-center ">
                    <Text>🔍</Text>
                    <TextInput placeholderTextColor="#9ca3af"
                        placeholder="Search Location" className="ml-3 text-gray-900 outline-none"></TextInput>
                </View>
            </View>
            <Text className="my-2 ml-3 font-semibold">POPULAR CITIES ⭐</Text>




            <FlatList
                data={DEFAULT_CITY}
            >

                <Pressable>
                    <View>
                        <Text>iran</Text>
                        <Text>tehran</Text>
                    </View>


                    <Text>select</Text>

                </Pressable>

            </FlatList>

        </SafeAreaView>

    </>
}  