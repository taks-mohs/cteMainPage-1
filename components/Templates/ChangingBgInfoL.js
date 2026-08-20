import { StyleSheet, Image, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../colors'
import {
    useFonts, Nunito_400Regular, Lato_400Regular, DMSans_300Light, GoogleSansCode_500Medium, Roboto_300Light
} from '@expo-google-fonts/dev';
import { LinearGradient } from 'expo-linear-gradient'

export default function infoChunkR(props) {
    const { width } = useWindowDimensions()

    useFonts({
        'googlesanscode': GoogleSansCode_500Medium,
        'latoregular': Lato_400Regular,
        'roboto': Roboto_300Light,
        'dmsans': DMSans_300Light
    })

    const styles = StyleSheet.create({
        text: {
            flexDirection: 'column',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
        },
        imageContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        infoBox: {
            width: width * 0.535,
            color: Colors.secondary,
        },
        infoText: {
            fontSize: 18,
            padding: 15,
            fontFamily: 'dmsans',
            textAlign: "left",
            color: Colors.primary,
        },
        headerBox: {
            width: width * 0.5,
            justifyContent: 'center',
        },
        headerInfo: {
            fontSize: 40,
            fontFamily: 'latoregular',
            textAlign: "flex-start",
            color: Colors.primary,
            paddingTop: 15,
            paddingLeft: 15,
        },
        imageBox: {
            width: width * 0.4,
            height: width * 0.35,
            borderBottomWidth: 8,
            borderBottomColor: Colors.primary,
            marginLeft: width * 0.05
        },
        mainChunk: {
            width: width,
            height: width * 0.27,
            backgroundColor: Colors.secondary,
            flexDirection: 'row',
        },
        title: {
            fontSize: width * 0.05,
            marginLeft: width * 0.1,
            marginRight: width * 0.04,
            color: props.textColor || Colors.secondary,
            fontFamily: 'oswaldsemibold',
            textAlign: "center"
        }
    })

    return (
        <View style={styles.mainChunk}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageBox}
                    source={props.imageUri}
                />
            </View>
            <View style={styles.text}>
                <View style={styles.headerBox}>
                    <Text style={styles.headerInfo}>{props.header}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}><Text style={{ fontWeight: 'bold' }}>{props.accn}</Text>{"\n"}{props.info}</Text>
                </View>
            </View>
        </View>
    )
}