import { Text, View } from "react-native";


function Weekly({ data = [] }) {
    const getpercentage = (max, min) => {
        const percent = Math.round(((max - min) / max) * 100);
        return `${percent}%`;
    };

    return <>
        <View>
            <Text className="ml-5 font-bold text-xl">7-Day ForeCast 📅</Text>
            <View className="m-5 bg-gray-300 rounded-lg p-5 shadow-sm">
                {data.map((d, index) => {
                    return <View key={index} className="flex-1">
                        <View className="flex-row py-2 justify-between items-center ">
                            <Text className="font-semibold text-lg w-20">{d.day}</Text>
                            <View className="flex flex-row gap-1 justify-start items-center w-32">
                                <Text className="text-xl ">{d.icon}</Text>
                                <Text>{d.condition}</Text>
                            </View>
                            <View className="flex-row items-center justify-between w-34 ">
                                <Text>{d.min}</Text>
                                <View className="w-15 overflow-hidden h-3 bg-gray-100 rounded-xl ">
                                    <View className={` h-full bg-blue-500 rounded-xl`} style={{ width: getpercentage(parseInt(d.max), parseInt(d.min)) }} />
                                </View>
                                <Text className="font-bold">{d.max}</Text>
                            </View>
                        </View>
                        {
                            index !== data.length - 1 && <View className="w-full bg-gray-400 h-[1px]" />
                        }
                    </View>
                })}
            </View>
        </View>
    </>
}

export default Weekly;