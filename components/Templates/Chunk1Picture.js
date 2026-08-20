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
            padding: width * 0.05,
            backgroundColor: props.backgroundColor || Colors.primary,
            alignItems: 'center'
        },
        picture: {
            width: width,
            height : 400
        }
    })

    return (
        <View style={styles.container}>
            {props.link ? (
                <Link href={props.link} target="_blank">
                    <Pressable>
                        <Image
                            source={props.image}
                            style={styles.infoImage}
                        />
                    </Pressable>
                </Link>
            ) : (
                <Image
                    source={props.image}
                    style={styles.picture}
                />
            )}
        </View>
    )
}