import { ScrollView, Text, View } from "react-native";


function Hourly({ data = [] }) {
    return <>
        <Text className=" ml-5 font-bold text-xl">
            Hourly Forecast
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="flex-row my-5">
            {data.map((h, index) => {
                return <View key={index} className={` flex py-3 gap-1 mx-1 items-center justify-center w-18 rounded-lg ${index === 0 ? "bg-blue-400 text-white" : "bg-gray-300"}`}>
                    <Text className="font-semibold">{h.time}</Text>
                    <Text className="text-2xl">{h.icon}</Text>
                    <Text className="font-semibold">{h.temp}</Text>
                </View>
            })}
        </ScrollView>
    </>
}


export default Hourly