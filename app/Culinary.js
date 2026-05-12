import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { LinearGradient } from "expo-linear-gradient"
import Footer from "../components/footer"
import { VideoView, useVideoPlayer } from "expo-video"
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import { YouTubePlayer } from "../components/Youtube"
import { useFonts, Oswald_500Medium } from "expo-font"
import CulinaryRoadmap from "../assets/Culinary/CulinaryRoadmap.png"
import ChangingBgs from "../components/Templates/ChangingBackground"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import SmallHeader from '../components/Templates/SmallHeader'

const backgrounds = [
   { id: 0,  uri: require('../assets/Business/Accounting.jpg') },
   { id: 1,  uri: require('../assets/Health/Health.jpeg') },
   { id: 2,  uri: require('../assets/CS/MiscImages/CSbackground.jpeg') }
]

export default function Culi() {
    const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
    const { height, width } = useWindowDimensions()
    useFonts({
        'oswaldmedium': Oswald_500Medium,
    })
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
               text={'Culinary'}
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
        //     <ImageBackground style={styles.bgImg} source={require('../assets/Culinary/elle-cosgrave-bEwJDtPGuKU-unsplash.jpg')}>
        //         <ScrollView>
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <HeaderChunk header={"Culinary"} />
        //             <Image source={CulinaryRoadmap} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <Chunk2L header={"Related Classes"}
        //                 primeColor="white"
        //                 secondColor="#C7C7C7"
        //                 info={[
        //                     <Chunk2Info
        //                         infoHeader={"Foundations of Culinary (Lvl 1)"}
        //                         image={require('../assets/Culinary/easy-dinner-recipes-for-beginners_cat-1.webp')}
        //                         infoBody={[<Text style={{ fontWeight: "bold" }}>Open to grades: 9-12</Text>, <br />, <Text>Foundations of Culinary Arts is an <Text style={{ fontWeight: "bold" }}>introductory course</Text> designed to inform students about careers in the food prep and service industries or related fields, basic nutritional and cooking concepts, and the history and influence of culture on food.</Text>]}
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader={"Culinary Arts: Food Preparation (lvl 2)"}
        //                         image={require('../assets/Culinary/2606852-84d547ec32d142f782e7d9ec104c9635.jpg')}
        //                         infoBody={[<Text style={{ fontWeight: "bold" }}>Open to grades: 10-12</Text>, <br />, <Text>Culinary Arts: Food Preparation is the <Text style={{ fontWeight: "bold" }}>second course</Text> in the Culinary Arts program of study designed to inform and expose students to various basic food preparation methods and considerations found in commercial kitchens and restaurants.</Text>]}
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader={"Advanced Culinary Arts: Pastry/Savory\n(lvl 3)"}
        //                         image={require('../assets/Culinary/Pastry-Chefs-Favorite-Pastries-and-Advice.webp')}
        //                         infoBody={[<Text style={{ fontWeight: "bold" }}>Open to grades: 11-12</Text>, <br />, <Text>Advanced Culinary Arts: Pastry and Savory is the <Text style={{ fontWeight: "bold" }}>third course</Text> in the Culinary Arts program of study designed to further students’ practice with food preparation in the culinary industry.</Text>]}
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader={"Kitchen Restaurant Operations (lvl 4)"}
        //                         image={require('../assets/Culinary/culinary_skills.jpg')}
        //                         infoBody={[<Text style={{ fontWeight: "bold" }}>Open to grades: 11-12</Text>, <br />, <Text>Kitchen Restaurant Operations is the <Text style={{ fontWeight: "bold" }}>fourth course</Text> in the Culinary Arts program of study and designed to prepare students for entry into the field of food service and culinary cuisine.</Text>]}
        //                     />,
        //                     <Chunk2Info
        //                         infoHeader={"Culinary Arts Work-Based Learning\n(lvl 4)"}
        //                         image={require('../assets/Culinary/dine-with-us-at-cia.jpg')}
        //                         infoBody={[<Text style={{ fontWeight: "bold" }}>Open to grades: 12</Text>, <br />, <Text>Culinary Arts: WBL is the <Text style={{ fontWeight: "bold" }}>capstone course</Text> in the Culinary Arts program of study. It is intended to provide a work-based learning experience for students to develop further understanding of professional issues, utilize employability skills, and demonstrate mastery of academic and technical skills learned through the program of study.</Text>]}
        //                     />]
        //                 } />
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <Chunk2R header="Suggested Classes"
        //                 primeColor="#FFFFFF"
        //                 secondColor="#C7C7C7"
        //                 info={<Chunk2Info
        //                     infoHeader={"\u2022 Health Services\n\u2022 Foundations of Business\n\u2022Any World Language\n\u2022Peer Education\n\u2022Psychology/AP Psychology\n\u2022 Sociology"}
        //                 />}
        //             />
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <Chunk2L header="Teachers"
        //                 primeColor="#FFFFFF"
        //                 secondColor="#C7C7C7"
        //                 info={[<Chunk2Info
        //                     infoHeader="Mr. Mitsuda"
        //                     image={require('../assets/Culinary/Mitsuda.jpg')}
        //                     infoBody="Teaches X, Y, & Z. Can be found @________. Loves This n' dat."
        //                 />,
        //                 <Chunk2Info
        //                     infoHeader="Mrs. Perkins"
        //                     image={require('../assets/Culinary/Perkins.jpg')}
        //                     infoBody="Teaches X, Y, & Z. Can be found @________. Loves This n' dat."
        //                 />,
        //                 <Chunk2Info
        //                     infoHeader="Mrs. Harada"
        //                     image={require('../assets/Stock_Portrait.png')}
        //                     infoBody="Teaches X, Y, & Z. Can be found @________. Loves This n' dat."
        //                 />
        //                 ]}
        //             />
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <View style={{ alignItems: "Center", backgroundColor: "#FFFFFF" }}>
        //                 <LinearGradient style={{ width: width * 0.6, height: width * 0.45, alignContent: "center" }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "#FFFFFF", "#C7C7C7"]}>
        //                     <Text style={{ fontSize: width * 0.05, color: Colors.secondary, fontFamily: 'oswaldmedium', TextAlign: "center", alignSelf: "center", marginBottom: width * 0.025 }}>CTE Video</Text>
        //                     <YouTubePlayer style={{ width: width * 3.5 * 0.16, height: width * 3.5 * 0.09, alignSelf: "center" }} modestBranding={true} autoplay={true} mute={true} videoId="QOJT0XNee_o" />
        //                 </LinearGradient>

        //             </View>
        //             <View style={{ marginTop: width * 0.05 }} />
        //             <Footer />
        //         </ScrollView >
        //     </ImageBackground >
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
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 600,
        backgroundColor: "#C7C7C7",
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        marginHorizontal: 100
    }
})