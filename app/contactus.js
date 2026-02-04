import { Text, View, StyleSheet } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import Footer from '../components/footer'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function contactus() {
  useFonts({
      'oswaldlight': Oswald_300Light,
      'oswaldmedium': Oswald_500Medium,
      'oswaldsemibold': Oswald_600SemiBold
    })
  return (
    <View>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.font}>Address:  2825 Ala Ilima St, Honolulu, HI 96818 <br/>
          Phone:  (808) 305-1000 <br/>
          Fax:	(808) 831-7919</Text>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 250,
    marginHorizontal: 100,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  font: {
    fontFamily: 'oswaldlight',
    fontSize: 20,
  }
})