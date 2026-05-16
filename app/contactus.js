import { Text, View, StyleSheet, Image, ScrollView, useWindowDimensions } from 'react-native-web'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import Footer from '../components/footer'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function contactus() {
  const { height, width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })
  return (
    <View style={styles.background}>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.font}>Address:  2825 Ala Ilima St, Honolulu, HI 96818 <br />
            Phone:  (808) 305-1000 <br />
            Fax:	(808) 831-7919
          </Text>
          <View style={{ marginTop: width * 0.05 }}></View>
        </View>
        <Image
          source={require("../assets/SchoolMap.png")}
          style={{marginLeft: 50}}
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 250,
    marginHorizontal: 75,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  font: {
    fontFamily: 'oswaldlight',
    fontSize: 20,
  },
  image: {
    flex: 1
  },
  background: {
    flex: 1
  }
})