import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import EventChunk from '../components/Templates/EventChunk'

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
         flex: 1,
         width: '100%',
         resizeMode: 'cover'
      }
   })

   return (
      <View style={styles.background}>
         <TopBar />
         <ImageBackground style={styles.bgImg} source={require('../assets/engineer.png')}>
            <ScrollView>
               <View style={{ marginTop: width * 0.25 }}></View>
               <EventChunk />
               <View style={{ marginTop: width * 0.05 }}></View>
               <Chunk2L
                  header="Testimonials"
                  info={[
                     <Chunk2Info
                        infoHeader="Student"
                        image={require('../assets/placeholder.jpg')}
                        infoBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                     />,
                     <Chunk2Info
                        infoHeader="Student"
                        image={require('../assets/placeholder.jpg')}
                        infoBody="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                     />,
                     <Chunk2Info
                        infoHeader="Student"
                        image={require('../assets/placeholder.jpg')}
                        infoBody="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                     />
                  ]}
               />
               <View style={{ marginTop: width * 0.1 }}></View>
               <Footer />
            </ScrollView>
         </ImageBackground>
      </View>
   )
}
