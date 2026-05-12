import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image, Pressable, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import Footer from '../components/footer'
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ChangingBgs from '../components/Templates/ChangingBackground'
import ChangingBgInfoL from '../components/Templates/ChangingBGInfoL'
import ChangingBgInfoR from '../components/Templates/ChangingBGInfoR'
import ImageHeader from '../components/Templates/ImageHeader'

const HeaderBackgrounds = [
   { id: 0, uri: require('../assets/Business/DECA.jpg') }, //deca photo
   { id: 1, uri: require('../assets/CTSO/HOSA/HOSAPicture.png') }, //hosa photo
   { id: 2, uri: require('../assets/Business/FallFest2.jpg') } //fccla photo
]
const DECABackgrounds = [
   { id: 0, uri: require('../assets/Business/Roleplay.jpg') },
   { id: 1, uri: require('../assets/Business/Awards.jpg') },
   { id: 2, uri: require('../assets/Business/FallFest2.jpg') }
]
const HOSABackgrounds = [
   { id: 0, uri: require('../assets/Business/Roleplay.jpg') },
   { id: 1, uri: require('../assets/Business/Awards.jpg') },
   { id: 2, uri: require('../assets/Business/FallFest2.jpg') }
]
const FCCLABackgrounds = [
   { id: 0, uri: require('../assets/Business/Roleplay.jpg') },
   { id: 1, uri: require('../assets/Business/Awards.jpg') },
   { id: 2, uri: require('../assets/Business/FallFest2.jpg') }
]

export default function CTSO() {
   const { height, width } = useWindowDimensions()

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
               backgrounds={HeaderBackgrounds}
               dimness={'#00000096'}
               fontSize={50}
               textColor={'white'}
               barWidth={'50%'}
               barColor={Colors.secondary}
               text={'CTSO'}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ImageHeader 
               backgroundColor={'white'}
               image = {require('../assets/CTSO/DECA/DECALogo.png')}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ChangingBgInfoL
               backgrounds={DECABackgrounds}
               fontSize={20}
               textColor={'white'}
               text={'yam'}
               color = {Colors.DECA}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ImageHeader 
               backgroundColor={'white'}
               image = {require('../assets/CTSO/HOSA/HOSALogo.png')}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ChangingBgInfoR
               backgrounds={HOSABackgrounds}
               fontSize={20}
               textColor={'white'}
               text={'yam'}
               color = {Colors.HOSA}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ImageHeader 
               backgroundColor={'white'}
               image = {require('../assets/CTSO/FCCLA/FCCLALogo.png')}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ChangingBgInfoL
               backgrounds={FCCLABackgrounds}
               fontSize={20}
               textColor={'white'}
               text={'yam'}
               color = {Colors.FCCLA}
            />
            <View style={{ marginTop: width * 0.1 }}></View>
            <Footer />
         </ScrollView>
      </View>
   )
}