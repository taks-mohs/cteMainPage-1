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
        width: width * 0.535,
        height: 200,
        color: Colors.secondary,
        borderWidth: 1,
    },
    infoText: {
        fontSize: width * 0.025,
        fontFamily: 'latoregular',
        textAlign: "left",
        color: Colors.primary
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