import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../colors'

export default function searchingToolChunk(props) {
    const { width } = useWindowDimensions()
    useFonts({
        'oswaldlight': Oswald_300Light,
        'oswaldmedium': Oswald_500Medium,
        'oswaldsemibold': Oswald_600SemiBold
    })

    const styles = StyleSheet.create({
        container: {
            padding: width * 0.075,
            backgroundColor: props.backgroundColor || Colors.secondary,
            alignItems: 'center'
        },
        info: {
            fontSize: width * 0.05,
            color: props.textColor || Colors.secondary,
            fontFamily: 'oswaldmedium',
        },
        imageContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.info}>{props.info}</Text>
        </View>
    )
}