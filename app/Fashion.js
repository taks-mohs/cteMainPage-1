import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import { Link } from 'expo-router'


export default function Fash() {
    const { width } = useWindowDimensions()

    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/Fashion/IMG_8419_2.jpg')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <HeaderChunk
                        header="Fashion"
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header="Projects"
                        primeColor="white"
                        secondColor="#C7C7C7"
                        info={[
                            <Chunk2Info
                                infoHeader="Bucket Hat"
                                image={require('../assets/Fashion/IMG_5437.jpeg')}
                                infoBody="Students utilize fabric in order to create these hats. They're taught how to create this piece using
                                    a sewing machine. With this skill, they are able to make custom-made hats according to the designs of
                                    the fabric that they choose."
                            />,
                            <Text style={{
                                fontSize: width * 0.03,
                                fontFamily: 'oswaldmedium',
                                color: Colors.secondary,
                                textAlign: 'center',
                            }}> Recycled Handbags </Text>,
                            <Image
                                source={require('../assets/Fashion/IMG_7866.jpg')}
                                style={{
                                    alignSelf: 'center',
                                    height: width * 0.175,
                                    width: width * 0.175,
                                }}
                            />,
                            <Image
                                source={require('../assets/Fashion/IMG_5674.jpeg')}
                                style={{
                                    alignSelf: 'center',
                                    height: width * 0.175,
                                    width: width * 0.175,
                                }}
                            />,
                            <Text style={{
                                fontSize: width * 0.015,
                                fontFamily: 'oswaldlight',
                                textAlign: 'center',
                                color: Colors.secondary,
                            }}>
                                These are recycled handbags made from different things. The bag on the right is made by bottle caps which makes
                                it very unique while also reusing scraps instead of throwing it away.
                            </Text>,
                            <Chunk2Info
                                infoHeader="Sneaker Construction"
                                image={require('../assets/Fashion/IMG_7800.jpeg')}
                                infoBody="The sneaker construction is also another one of the project that the students do within the school year.
                                    The students are able to embrace their creativity through this project."
                            />
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2R
                        header="Active"
                        primeColor="white"
                        secondColor="#C7C7C7"
                        info={[
                            <Chunk2Info
                                infoHeader="Sewing"
                                image={require('../assets/Fashion/vid_03 (3).gif')}
                                infoBody="Here are students using the sewing machine for one of their projects. It's a fun way
                                    to do some hands-on learning and could be a skill that's helpful outside of school."
                            />,
                            <Chunk2Info
                                infoHeader="Clothing"
                                image={require('../assets/Fashion/vid04 (1).gif')}
                                infoBody="This is an example of how students take measurements when making clothing. It's
                                    an important skill for any student who wants to go into this pathway as a career or
                                    maybe even a side hobby."
                            />,
                            <Chunk2Info
                                infoHeader="Fashion Illustrations"
                                image={require('../assets/Fashion/vid05 (1).gif')}
                                infoBody="It is important to always draw out an idea before fully jumping into it.
                                    By doing these illustrations, students will have a better way of approaching
                                    making clothes for real people."
                            />
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header="Teachers"
                        primeColor="white"
                        secondColor="#C7C7C7"
                        info={[
                            <Chunk2Info
                                infoHeader="Na'a LeRoy Makekau"
                                image={require('../assets/Fashion/makekau_pic.jpg')}
                                infoBody="Mr. Makekau is the only Fashion teacher at Moanalua High School. He helps his students by preparing
                                    them for careers outside of high school and brings out each of his students' creativity."
                            />
                        ]}
                    />
                    <Footer />
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    bgImg: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover'
    },
})