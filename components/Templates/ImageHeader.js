import { StyleSheet, Text, Pressable, View, Image, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, DMSans_700Bold } from '@expo-google-fonts/dev'
import Colors from '../colors'

export default function ImageHeader(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'dm': DMSans_700Bold,
  })

  const styles = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      justifyContent: 'center',
    }
  })

  return (
    <View style={styles.container}>
      <Image 
        source = {props.image}
        style = {styles.image}
      />
    </View>
  )
}