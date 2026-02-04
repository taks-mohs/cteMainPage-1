import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import { VideoView, useVideoPlayer } from "expo-video";
import { Link } from "expo-router";
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import TopBar from '../components/topBar'
import HeaderChunk from '../components/Templates/HeaderChunk'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import { YouTubePlayer } from "../components/Youtube";
import ImagelessInfoChunk from "../components/Templates/ImagelessInfoChunk";

export default function B_C() {
    const player = useVideoPlayer(require('../assets/B_CVideo.mp4'), player => { player.play() });
    const { width } = useWindowDimensions();
    useFonts({
        'oswaldlight': Oswald_300Light,
        'oswaldmedium': Oswald_500Medium,
        'oswaldsemibold': Oswald_600SemiBold
    })

    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/B_Cbg.png')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.25 }}></View>
                    <HeaderChunk
                        backgroundColor={Colors.secondary}
                        textColor={Colors.primary}
                        header="Building & Construction"
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        backgroundColor={Colors.secondary}
                        textColor={Colors.primary}
                        header="Information"
                        info={[
                            <ImagelessInfoChunk
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Description"
                                infoBody="Building and Construction introduces students to the fundamentals of the construction industry, including blueprint reading, site preparation, and tool usage. Students gain hands-on experience in the workforce while also learning safety protocols and industry standards, preparing them for careers in construction and related fields."
                            />,
                            <ImagelessInfoChunk
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Possible Careers"
                                infoBody="• Architect • Carpenter • Civil Engineer • Drafter • Electrical Engineer • Electrician • Fuel Cell Technician • Materials Engineer • Mechanical Engineer • Mechatronic Technician • Painter• Plumber • Roofer • Surveyor• Welder"
                            />,
                            <ImagelessInfoChunk
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Inventory"
                                infoBody="Building and Construction introduces students to the fundamentals of the construction industry, including blueprint reading, site preparation, and tool usage. Students gain hands-on experience in the workforce while also learning safety protocols and industry standards, preparing them for careers in construction and related fields."
                            />
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2R
                        backgroundColor={Colors.secondary}
                        textColor={Colors.primary}
                        header="Electives"
                        info={[
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Foundations of Construction"
                                image={require('../assets/construction.png')}
                                infoBody="Open to grades: 9, 10, 11, 12. Foundations of Construction is an introductory course designed to inform students about careers in building and construction.
                                    This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Construction 1"
                                image={require('../assets/bc1.png')}
                                infoBody="Open to grades: 10, 11, 12. Residential & Commercial Construction 1 is the second course in the Residential & Commercial Construction program of study
                                    intended to have students develop an understanding of the different phases of a construction project from start to finish. Upon
                                    completion of this course, a proficient student will be able to demonstrate knowledge and skills in the early phases of building
                                    construction, including site layout, concrete and floor to ceiling systems."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Construction 2"
                                image={require('../assets/bc2.png')}
                                infoBody="Open to grades: 11, 12. Residential & Commercial Construction 2 is the third course in the Residential & Commercial Construction program of study
                                    designed to allow students to develop an understanding of the different phases of a construction project from start to finish. Upon
                                    completion of this course, a proficient student will be able to demonstrate knowledge and skill in the later phases of building
                                    construction including roofing systems, exterior finishing, stair framing systems, masonry systems, and MEP systems."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Construction: WBL"
                                image={require('../assets/bc3.png')}
                                infoBody="Open to grade 12. Residential & Commercial Construction: WBL is the capstone course in the program, offering a work-based learning experience to enhance professional and technical skills. Students explore career pathways, prepare for postsecondary programs or jobs, and gain hands-on experience through internships or apprenticeships."
                            />,
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>,
                    <Chunk2L
                        backgroundColor={Colors.secondary}
                        textColor={Colors.primary}
                        header="Teachers"
                        info={[
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                image={require('../assets/TeacherHeadshots/Murray.jpg')}
                                infoHeader="J. Murray"
                                infoBody="Teaches Building & Construction."
                            />,
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2R
                        backgroundColor={Colors.secondary}
                        textColor={Colors.primary}
                        header="Suggested Courses"
                        info={[
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="4th Year of Math"
                                image={require('../assets/calculus.png')}
                                infoBody="Math helps in building and construction by enabling accurate measurements, structural calculations, and material estimations, ensuring safe and efficient designs."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="4th Year of Science"
                                image={require('../assets/physics.png')}
                                infoBody="Science helps in building and construction by providing knowledge of forces, motion, and energy, which are essential for designing and analyzing structures. It ensures safe and efficient construction by applying principles like torque, equilibrium, and material strength."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Business CORE"
                                image={require('../assets/business logo.png')}
                                infoBody="Business CORE is valuable for construction as it teaches essential skills like project management, budgeting, and effective communication, which are critical for overseeing construction projects. It also provides knowledge of financial planning and resource allocation, ensuring projects are completed efficiently and within budget."
                            />,
                            <Chunk2Info
                                backgroundColor={Colors.secondary}
                                textColor={Colors.primary}
                                infoHeader="Weight Training/Team Sports"
                                image={require('../assets/wt.png')}
                                infoBody="Weight training/Team Sports is beneficial for construction as it helps build physical strength and endurance, which are essential for handling the demanding physical tasks involved in construction work. It also improves overall fitness and reduces the risk of injuries, enabling workers to perform their duties more effectively and safely."
                            />,
                        ]}
                    />
                    <View>
                        <YouTubePlayer
                            videoId="0U3ip3_cLDU"

                        />
                    </View>

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
    chunk1: {
        marginTop: 200,
        marginHorizontal: 150,
        padding: 75,
        backgroundColor: Colors.secondary,
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 60,
        color: Colors.primary,
        fontFamily: 'oswaldmedium',
        marginBottom: 25
    },
    chunk2: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        flexDirection: 'row'
    },
    c2title: {
        fontSize: 75,
        marginRight: 250,
        color: Colors.primary,
        fontFamily: 'oswaldsemibold'
    },
    c3title: {
        fontSize: 75,
        marginLeft: 250,
        color: Colors.primary,
        fontFamily: 'oswaldsemibold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    break: {
        margin: 40
    },
    c2chunk: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 75
    },
    c2cBody: {
        fontSize: 18,
        fontFamily: 'oswaldlight',
        color: Colors.primary,
        textAlign: 'center',
    },
    studentImg: {
        height: 250,
        width: 250
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'oswaldmedium'
    },
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        marginBottom: 50,
        width: 640
    }
})