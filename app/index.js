import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
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
   const backgrounds = [
      require('../assets/Business/accounting.jpg'),
      require('../assets/Health/Health.jpeg'),
      require('../assets/CS/MiscImages/CSbackground.jpeg')
   ]
   const [currentBackground, setCurrentBackground] = useState(backgrounds[0])
   const [index, setIndex] = useState(0);
   const { width } = useWindowDimensions()

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
      }, 5000)
      return () => clearInterval(interval)

   }, [])

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
         width: '100%',
         justifyContent: 'center'

      },
      imgBtn: {
         height: 50,
         width: 50,
         borderRadius: 25,
         color: 'black'
      }
   })

   return (
      <View style={styles.background}>
         <TopBar />
         <ScrollView>
            <ImageBackground style={styles.img} source={backgrounds[index]}>
               <Pressable
                  style={styles.imgBtn}
               > 
               </Pressable>
            </ImageBackground>
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
