import { StyleSheet, Image, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../colors'
import {
  useFonts, Nunito_400Regular, Lato_400Regular, Inter_900Black, GoogleSansCode_500Medium, 
} from '@expo-google-fonts/dev';
import { LinearGradient } from 'expo-linear-gradient'

export default function infoChunkL (props) {
  const { width } = useWindowDimensions()
  useFonts({
    'googlesanscode': GoogleSansCode_500Medium,
    'latoregular': Lato_400Regular,
  })

  const styles = StyleSheet.create({
    infoBox: {
        width: width * 0.5,
        height: 200,
        padding: width * 0.05
    },
    infoText: {
        fontSize: width * 0.025,
        fontFamily: 'latoregular',
        textAlign: "center",
        color: Colors.secondary
    },
    imageBox: {
        width: width * 0.4,
        height: width * 0.35,
        borderBottomWidth: 8,
        borderBottomColor: Colors.primary,
    },
    mainChunk: {
      width: width,
      height: width * 0.27,
      backgroundColor: Colors.secondary,
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      fontSize: width * 0.05,
      marginRight: width * 0.1,
      marginLeft: width * 0.04,
      color: props.textColor || Colors.secondary,
      fontFamily: 'oswaldsemibold',
      textAlign: "center"
    }
  })

//   const imageUri = 

  return (
    <View style={styles.mainChunk}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}> {props.text} </Text>
      </View>
      <Image 
        style={styles.imageBox}
        source={props.imageUri}
      />
    </View>
  )
}