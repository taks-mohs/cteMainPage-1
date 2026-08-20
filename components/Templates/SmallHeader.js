import { StyleSheet, Text, Pressable, View, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, DMSans_700Bold } from '@expo-google-fonts/dev'
import Colors from '../colors'

export default function Header(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'dm': DMSans_700Bold,
  })

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.headerBg,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      fontSize: width * 0.05,
      fontFamily: 'dm',
      color: Colors.headerTxt,
      textAlign: 'center'
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.header}</Text>
    </View>
  )
}