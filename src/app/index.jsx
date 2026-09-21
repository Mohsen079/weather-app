import { useWeather } from "@/hooks/weather/useWeather";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/common/Header";
import { Current, Hourly, Weekly } from "../components/weather";

export default function HomeScreen() {


  const { data, isLoading, isError, error, refetch, isFetching } = useWeather();

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="text-gray-500 font-semibold mt-4 text-center">Fetching live weather...</Text>
      </SafeAreaView>
    );
  }



  console.log(data)


  if (isError) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100 p-6 text-center">

        <View className="w-full mt-20 flex justify-center items-center">
          <Text className="text-5xl mb-2 mx-auto">📡</Text>
          <Text className="text-red-500 font-bold text-lg text-center">{error?.message || "Failed to load data"}</Text>
          <Text className="text-gray-500 mt-2 mb-4 text-center">Please check your internet connection.</Text>
          <Text onPress={() => refetch()} className="text-blue-500 font-bold text-base p-2 mx-auto">
            Try Again 🔄
          </Text>
        </View>
      </SafeAreaView>
    );
  }




  return <><SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
      <Header data={data?.current} />
      <Current data={data?.current} />
      <Hourly data={data?.hourly} />
      <Weekly data={data?.daily} />
    </ScrollView>
  </SafeAreaView>
  </>
}