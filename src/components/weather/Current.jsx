import { Text, View } from "react-native";

function Current({ data }) {

    if (!data) return null;

    const { temp, icon, condition, feelsLike, humidity, wind } = data || {};

    console.log("data", data)
    return <>
        <View className=" flex items-center bg-gray-200 m-5 py-2 px-4 rounded-lg shadow-sm">
            <Text className="text-7xl my-2">{icon}</Text>
            <Text className="text-7xl font-black">{temp}</Text>
            <Text className="text-2xl font-black">{condition}</Text>

            <View className="bg-gray-400 h-[1px] w-full mt-3" />

            <View className="flex-row items-center justify-between  w-full">
                <View className="flex-1 items-center text-center p-4">
                    <Text className="text-lg">🌡️</Text>
                    <Text className="text-lg">feels like</Text>
                    <Text className="text-lg font-bold">{feelsLike}</Text>
                </View>
                <View className="bg-gray-400 h-[80%] w-[1px]" />

                <View className="flex-1 items-center p-4">
                    <Text className="text-lg">💧</Text>
                    <Text className="text-lg">humidity</Text>
                    <Text className="text-lg font-bold">{humidity}</Text>
                </View>
                <View className="bg-gray-400 h-[80%] w-[1px]" />

                <View className="flex-1 items-center p-4">
                    <Text className="text-lg">💨</Text>
                    <Text className="text-lg">wind</Text>
                    <Text className="text-lg font-bold">{wind}</Text>
                </View>
            </View>
        </View></>

}


export default Current