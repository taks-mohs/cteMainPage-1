import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions, Image, Pressable, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

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
        'oswaldsemibold': Oswald_600SemiBold
    })

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: '#ffffff',
        },
        bgImg: {
            flex: 1,
            width: '100%',
            resizeMode: 'cover'
        },
        img: {
            height: 500,
            width: '100%',
        },
        dim: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            backgroundColor: '#00000063'
        },
        btnContainer: {
            height: 50,
            width: width,
            padding: 20,
            paddingRight: 40,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            columnGap: 10
        },
        btn: {
            height: 15,
            width: 15,
            borderRadius: 7.5,
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

        <ImageBackground style={styles.img} source={currentBackground[index]?.uri}>
            <View style={styles.dim}>
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
            </View>
        </ImageBackground>

    )
}