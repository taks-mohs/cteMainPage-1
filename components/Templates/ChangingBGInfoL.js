import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image, Pressable, Button, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import {
    useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium,
    Nunito_400Regular, Lato_400Regular, Inter_900Black, GoogleSansCode_500Medium,
} from '@expo-google-fonts/oswald'
import Colors from '../colors'

export default function ChangingBgs(props) {
    const backgrounds = props.backgrounds || []

    const { width } = useWindowDimensions()
    const [currentBackground, setCurrentBackground] = useState(backgrounds)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            updateCurrent(index, false)
            // console.log("yo")
        }, 5000)
        return () => clearInterval(interval)

    }, [currentBackground])

    const updateCurrent = (id, change) => {
        setCurrentBackground(prevBackgrounds =>
            prevBackgrounds.map(background =>
                background
            )
        )
        change ? setIndex(id) : setIndex((prevIndex) => (prevIndex + 1) % currentBackground.length)
    }
    
    useFonts({
        'oswaldlight': Oswald_300Light,
        'oswaldmedium': Oswald_500Medium,
        'oswaldsemibold': Oswald_600SemiBold,
        'googlesanscode': GoogleSansCode_500Medium,
        'latoregular': Lato_400Regular,

    })

    const styles = StyleSheet.create({
        infoBox: {
            width: width * 0.535,
            height: 200,
            padding: width * 0.05,
            color: Colors.secondary,
        },
        infoText: {
            fontSize: width * 0.025,
            fontFamily: 'latoregular',
            textAlign: "flex-start",
            color: Colors.primary
        },
        imageBox: {
            width: width * 0.4,
            height: width * 0.32,
            borderBottomWidth: 8,
            borderBottomColor: Colors.primary,
            justifyContent: 'flex-end',
        },
        mainChunk: {
            width: width,
            height: width * 0.27,
            backgroundColor: props.color,
            alignItems: 'center',
            flexDirection: 'row',
        },
        headerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontFamily: 'oswaldsemibold',
            fontSize: props.fontSize,
            color: props.textColor,
            textAlign: 'center'
        },
        btnContainer: {
            height: width * 0.1,
            width: width * 0.4,
            flexDirection: 'row',
            justifyContent: 'center',
            padding: width * 0.05,
            columnGap: width * 0.014,
        },
        btn: {
            height: 14,
            width: 14,
            borderRadius: 7,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: '#ffffff31'
        },
        btnPressed: {
            backgroundColor: '#000000'
        },
        btnNormal: {
            backgroundColor: '#ffffff23'
        }
    })

    return (
        <View style={styles.mainChunk}>
            <View style={styles.infoBox}>
                <Text style={styles.infoText}> {props.text} </Text>
            </View>
            <ImageBackground style={styles.imageBox} source={currentBackground[index]?.uri}>
                <View style={styles.btnContainer}>
                    {currentBackground.map((background) => (
                        <Pressable
                            key={background.id}
                            onPress={() => updateCurrent(background.id, true)}
                            style={[
                                styles.btn,
                                index === background.id && styles.btnPressed
                            ]}
                        >
                        </Pressable>

                    ))}
                </View>
            </ImageBackground>
        </View>
    )
}