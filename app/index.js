import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import EventChunk from '../components/Templates/EventChunk'
import ImageInfoL from '../components/Templates/ImageInfoL'

export default function HomePage() {
   const { width } = useWindowDimensions()
   useFonts({
      'oswaldlight': Oswald_300Light,
      'oswaldmedium': Oswald_500Medium,
      'oswaldsemibold': Oswald_600SemiBold
   })

   const styles = StyleSheet.create({
      background: {
         flex: 1,
         backgroundColor: Colors.primary,
      },
      bgImg: {
         height: '100%',
         width: '100%',
         resizeMode: 'cover'
      },
      img: {
         height: 500,
         width: '100%'
      }
   })

   return (
      <View style={styles.background}>
         <TopBar />
         <ScrollView>
            <Image style={styles.img} source={require('../assets/Business/accounting.jpg')}/>
            <View style={{ marginTop: width * 0.25 }}></View>
            <View style={{ marginTop: width * 0.05 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               text='herro'
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <Footer />
         </ScrollView>
      </View>
   )
}
