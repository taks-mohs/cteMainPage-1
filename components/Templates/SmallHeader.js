import { StyleSheet, Text, Pressable, View, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, NotoSans_400Regular } from '@expo-google-fonts/dev'
import Colors from '../colors'

export default function Header(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'noto' : NotoSans_400Regular,
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
      fontFamily: NotoSans_400Regular,
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