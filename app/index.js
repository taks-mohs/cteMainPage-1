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
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ChangingBgs from '../components/Templates/ChangingBackground';

const backgrounds = [
   { id: 0,  uri: require('../assets/Business/tax.jpg') },
   { id: 1,  uri: require('../assets/Health/Health.jpeg') },
   { id: 2,  uri: require('../assets/CS/MiscImages/CSbackground.jpeg') }
]

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
            <ChangingBgs 
               backgrounds={backgrounds} 
               dimness={'#00000096'} 
               fontSize={50} 
               textColor={'white'} 
               barWidth={'50%'} 
               barColor={Colors.secondary}
               text={'CTE'}
            />
            <View style={{ marginTop: width * 0.05 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               text='hersasdmro'
            />
            <EventChunk />
            <View style={{ marginTop: width * 0.1 }}></View>
            <Footer />
         </ScrollView>
      </View>
   )
}