import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image, Pressable, Button } from 'react-native'
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

const initialBackgrounds = [
   { id: 0,  uri: require('../assets/Business/accounting.jpg') },
   { id: 1,  uri: require('../assets/Health/Health.jpeg') },
   { id: 2,  uri: require('../assets/CS/MiscImages/CSbackground.jpeg') }
]

export default function HomePage() {
   const { width } = useWindowDimensions()
   const [currentBackground, setCurrentBackground] = useState(initialBackgrounds)
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         updateCurrent(index, false)
         // console.log("yo")
      }, 5000)
      return () => clearInterval(interval)

   }, [currentBackground])

   const updateCurrent = (id, change) => {
      setCurrentBackground(prevBackgrounds =>
         prevBackgrounds.map(background =>
            background
         )
      )
      change ? setIndex(id) : setIndex((prevIndex) => (prevIndex + 1) % currentBackground.length)
   }

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
      },
      img: {
         height: 500,
         width: '100%',
         justifyContent: 'flex-end',
         alignItems: 'flex-start',

      },
      btnContainer: {
         height: 50,
         width: width,
         padding: 20,
         paddingRight: 40,
         flexDirection: 'row',
         justifyContent: 'flex-end',
         columnGap: 10
      },
      btn: {
         height: 15,
         width: 15,
         borderRadius: 7.5,
         borderWidth: 2,
         borderColor: 'black',
         backgroundColor: '#ffffff23'
      },
      btnPressed: {
         backgroundColor: '#000000'
      },
      btnNormal: {
         backgroundColor: '#ffffff23'
      }
   })

   return (
      <View style={styles.background}>
         <TopBar />
         <ScrollView>
            <ImageBackground style={styles.img} source={currentBackground[index].uri}>
               <View style={styles.btnContainer}>
                  {currentBackground.map((background) => (
                     <Pressable
                        key={background.id}
                        onPress={() => updateCurrent(background.id, true)}
                        style={[
                           styles.btn,
                           index === background.id && styles.btnPressed
                        ]}
                     >
                     </Pressable>

                  ))}
               </View>
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