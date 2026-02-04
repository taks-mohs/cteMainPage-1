import { StyleSheet, Text, Pressable, View, useWindowDimensions, Image } from 'react-native'
import { Link } from 'expo-router'
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
            marginHorizontal: width * 0.1,
            padding: width * 0.05,
            backgroundColor: props.backgroundColor || Colors.primary,
            alignItems: 'center'
        },
        header: {
            fontSize: width * 0.05,
            color: props.textColor || Colors.secondary,
            fontFamily: 'oswaldmedium',
            marginBottom: width * 0.02
        },
        picture: {
            fontSize: width * 0.025,
            padding: width * 0.01,
            color: props.backgroundColor || Colors.primary,
            backgroundColor: props.textColor || Colors.secondary,
            fontFamily: 'oswaldsemibold'
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.header}</Text>
            <Link href={props.link} target="_blank">
                <Pressable>
                    <Image
                        source={props.image}
                        style={styles.infoImage}
                    />
                </Pressable>
            </Link>
        </View>
    )
}