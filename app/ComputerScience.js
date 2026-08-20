// React-native Imports
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
// Other Component Imports
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import Links from "../components/constants"
// Template Component Imports
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk1Picture from '../components/Templates/Chunk1Picture'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import ImagelessInfoChunk from "../components/Templates/ImagelessInfoChunk"
import csRoadmap from "../assets/CS/Progression.png"
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import ChangingBgs from "../components/Templates/ChangingBackground"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import SmallHeader from '../components/Templates/SmallHeader'

const backgrounds = [
   { id: 0,  uri: require('../assets/Business/Accounting.jpg') },
   { id: 1,  uri: require('../assets/Health/Health.jpeg') },
   { id: 2,  uri: require('../assets/CS/MiscImages/CSbackground.jpeg') }
]

const asset = resolveAssetSource(csRoadmap);

export default function CS() {
    // Template Component
    const { height, width } = useWindowDimensions()
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: Colors.primary,
        },
        bgImg: {
            flex: 1,
            height: '100%',
            width: '100%',
            resizeMode: 'cover'
        }
    })

    // Page
    return (
        <View style={styles.background}>
         <TopBar />
         <ScrollView>
            <ChangingBgs
               backgrounds={backgrounds}
               dimness={'#00000096'}
               fontSize={80}
               textColor={'white'}
               barWidth={'50%'}
               barColor={Colors.secondary}
               text={'Computer Science'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={"info"}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="header"
            />
            <View style={{ marginTop: width * 0.06 }}></View>
            <teacher
               info="aaaaa"
               imageUri={require("../assets/TeacherHeadshots/GOAT.jpg")}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={'info'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={"info"}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="header"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <teacher
               info="aaaaa"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={'info'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={"info"}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="header"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={'info'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="header"
               accn="ACCN: accn"
               info={"info"}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <Footer />
         </ScrollView>

      </View>
        // <View style={styles.background}>
        //     <TopBar />
        //     <ImageBackground style={styles.bgImg} source={require('../assets/CS/MiscImages/CSbackground.jpeg')}>
        //         <ScrollView>
        //             {/* Header Section */}
        //             <View style={{ marginTop: width * 0.05 }}></View>
        //             <HeaderChunk
        //                 header="Computer Science"
        //             />
        //             {/* Related Classes Section */}
        //             <View style={{ marginTop: width * 0.05 }}></View>
        //             <Image source={csRoadmap} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
        //             <Chunk2L
        //                 header="Related Classes"
        //                 info={[
        //                     <Chunk2Info
        //                         infoHeader="Foundations of Computer Systems & Technology"
        //                         image={require('../assets/CS/MiscImages/codeOrg.webp')}
        //                         infoBody="This course is hands-on introduction to computer science concepts and skills. Computer science concepts covered will include an exploration of computer programming in different applications such as web development, game development and robotics."
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader="AP Computer Science"
        //                         image={require('../assets/CS/MiscImages/Java.jpg')}
        //                         infoBody=" Students are introduced to computer science with fundamental topics that include problem solving, design strategies and methodologies, organization of data (data structures), approaches to processing data (algorithms), analysis of potential solutions, and the ethical and social implications of computing."
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader="Programming 2: Mobile App Development"
        //                         image={require('../assets/CS/MiscImages/Javascript.png')}
        //                         infoBody="Programming 2: Mobile Applications Development is the third course in the Programming program of study designed to inform students onthe role of mobile applications technologies in society, what comprises a mobile application and the process used for designing one, as well as to prepare students for mobile applications development through the use of a programming language."
        //                     />
        //                 ]}
        //             />
        //             <View style={{ marginTop: width * 0.05 }}></View>
        //             <View style={styles.chunk2}>
        //                 {/* Clubs Section */}
        //                 <Chunk2L
        //                     header="Clubs"
        //                     info={[
        //                         <Chunk2Info
        //                             infoHeader="MeneDevs (Coding Club)"
        //                             image={require('../assets/CS/MiscImages/GameDevelopment.png')}
        //                             infoBody="Unfortunately, MeneDevs is finding it hard to find members. If you are interested in coding, please join the MeneDevs, Coding Club. The Coding Club focuses on a new topic every year ranging fromm website development, to game development."
        //                         />
        //                     ]}
        //                 />
        //                 {/* End of Clubs Section */}
        //                 <View style={{ marginTop: width * 0.05 }}></View>
        //                 <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false} horizontal={true}>
        //                     <Chunk1Picture
        //                         header='Platformer Game'
        //                         link='https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'
        //                         image={require('../assets/CS/ICTSGames/game1.png')}
        //                     />
        //                     <Chunk1Picture
        //                         header='Frogger Game'
        //                         link='https://studio.code.org/projects/gamelab/kjZSLL7eHi-LWqZh4--K74fxlet4QjHh5wmMjPcKCow/embed?nosource'
        //                         image={require('../assets/CS/ICTSGames/game2.png')}
        //                     />
        //                     <Chunk1Picture
        //                         header='Undermon Game'
        //                         link='https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'
        //                         image={require('../assets/CS/ICTSGames/game3.png')}
        //                     />
        //                     <Chunk1Picture
        //                         header='Lucia & Sable'
        //                         link='https://studio.code.org/projects/gamelab/M5ZmmjLWTLaBkXfrp3JXzvHmnGg88yp3SI05Ks4tDJR/embed?nosource'
        //                         image={require('../assets/CS/ICTSGames/game4.png')}
        //                     />
        //                     <Chunk1Picture
        //                         header='Space Race'
        //                         link='https://studio.code.org/projects/gamelab/dAcGneC5y2WhTM7gQdvJjOZwnb_TNA6jFVvaDmAO1E9/embed?nosource'
        //                         image={require('../assets/CS/ICTSGames/game5.png')}
        //                     />
        //                 </ScrollView>
        //                 {/* The Title of the Section */}
        //             </View>
        //             <View style={styles.chunk2}>
        //                 {/* Teachers Section */}
        //                 <View style={{ marginTop: width * 0.05 }}></View>
        //                 <Chunk2L
        //                     header="Teachers"
        //                     info={[
        //                         <Chunk2Info
        //                             infoHeader="S. Takahashi"
        //                             image={require('../assets/TeacherHeadshots/GOAT.jpg')}
        //                             infoBody="Mr.Takahashi is your Computer Science teacher for Foundations of Computer Systems & Technology, AP Computer Science, and Programming 2: Mobile App Development. He is also the adviser for MeneDevs (Coding Club)."
        //                         />,
        //                         <Chunk2Info
        //                             infoHeader="B. Park"
        //                             image={require('../assets/TeacherHeadshots/Park.jpg')}
        //                             infoBody="Mr.Park is your Computer Science teacher for Foundations of Computer Systems."
        //                         />,
        //                         <Chunk2Info
        //                             infoHeader="H Ishikawa"
        //                             image={require('../assets/TeacherHeadshots/Ishikawa.jpg')}
        //                             infoBody="Mr.Ishikawa is your Computer Science teacher for Foundations of Computer Systems."
        //                         />
        //                     ]}
        //                 />
        //             </View>
        //             {/* End of Teachers Section */}
        //             <View style={styles.chunk2}>
        //                 {/* Related Classes Section */}
        //                 <Chunk2L
        //                     header="Suggested Courses"
        //                     info={[
        //                         <ImagelessInfoChunk
        //                             infoHeader="Four Years of Math"
        //                             infoBody=
        //                             "Depending on what core classes you receive, your fourth year of math might be Trigonometry or Precalculus Calculus AP Calculus AB and AP Calculus B/C. It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics."
        //                         />,
        //                         <ImagelessInfoChunk
        //                             infoHeader="Four Years of Science"
        //                             image={require('../assets/CS/MiscImages/Java.jpg')}
        //                             infoBody=
        //                             "Your fourth year of science might be AP Physics. It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science"
        //                         />,
        //                         <ImagelessInfoChunk
        //                             infoHeader="Engineering Technology"
        //                             image={require('../assets/CS/MiscImages/Javascript.png')}
        //                             infoBody="Refer to the Engineering page for more information."
        //                         />,
        //                         <ImagelessInfoChunk
        //                             infoHeader="Creative Media"
        //                             image={require('../assets/CS/MiscImages/Javascript.png')}
        //                             infoBody="Refer to the Creative Media page for more information."
        //                         />
        //                     ]}
        //                 />
        //                 {/* End of Suggested Courses Section  */}
        //             </View>
        //             <View>
        //                 <Chunk1Picture
        //                     header="Course Catalog (Press the Image)"
        //                     link={Links.courseCatalog}
        //                     image={require('../assets/mohsLogov2.png')}
        //                 />
        //             </View>
        //             <Footer />
        //         </ScrollView>
        //     </ImageBackground>
        // </View >
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
        backgroundColor: Colors.primary,
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 75,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium',
        marginBottom: 25,
    },
    chunk2: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        flexDirection: 'row'
    },
    c2title: {
        fontSize: 75,
        marginRight: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
    c3title: {
        fontSize: 75,
        marginLeft: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
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
        textAlign: 'center',
        color: Colors.secondary
    },
    studentImg: {
        height: 250,
        width: 250
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium'
    },
    c3chunk: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 75
    },
    roadmap: {
        alignSelf: 'center',
        width: 600
    }
})