import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'
import { Link } from 'expo-router';

export default function footer() {
  const { width, height } = useWindowDimensions();
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    logo: {
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
      width: 150,
      height: 150
    },
    bottom: {
      width: width,
      height: height * 0.4,
      backgroundColor: "silver",
      padding: width * 0.05,
    },
  })
  
  return (
    <View>
      <View style={styles.bottom}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Text>aaaaaaa</Text>
      </View>
    </View>
  )
}