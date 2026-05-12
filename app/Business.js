import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, FlatList, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { Link } from "expo-router"
import { VideoView, useVideoPlayer } from "expo-video"
import Footer from "../components/footer"
import Chunk1 from "../components/Templates/Chunk1"
import Chunk2Info from "../components/Templates/Chunk2Info"
import Chunk2L from "../components/Templates/Chunk2L"
import Chunk2R from "../components/Templates/Chunk2R"
import HeaderChunk from "../components/Templates/HeaderChunk"
import teacher from "../components/Templates/teacher"
import { YouTubePlayer } from "../components/Youtube"
import BusinessRoadmap from "../assets/Business/BusinessRoadmap.png"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import SmallHeader from '../components/Templates/SmallHeader'
import { NotoSans_400Regular } from "@expo-google-fonts/dev"
import ChangingBgs from '../components/Templates/ChangingBackground';

const backgrounds = [
   { id: 0, uri: require('../assets/Business/DECA.jpg') },
   { id: 1, uri: require('../assets/Business/BloodDriveReception.jpg') },
   { id: 2, uri: require('../assets/Business/BloodDrivePresent.jpg') }
]

export default function Busi() {
   const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
   const { height, width } = useWindowDimensions();
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
   });

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
               text={'Business Management, Finance & Marketing'}
            />
            <View style={{ marginTop: width * 0.05 }}></View>
            <YouTubePlayer style={{ width: width * 3.5 * 0.175, height: width * 3.5 * 0.105, alignSelf: "center", paddingTop: 24 }}
               modestBranding={true} autoplay={false} mute={false} videoId="-whTf0yhDeU"
            />
            <View style={{ marginTop: width * 0.05 }}></View>
            <Image source={BusinessRoadmap} resizeMode="contain" style={{ alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.8 }} />
            <View style={{ marginTop: width * 0.1 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="Foundations of Business & Marketing"
               accn="ACCN: TBB1000"
               info={"Foundations of Business & Marketing is an introductory course designed to inform students about careers in various sectors of business, as well as basic business concepts. This Level 1 course serves as the foundation course for the Business Management, Entrepreneurship, Financial Management, Marketing Management, and Supply Chain and Logistics Technology programs of study. Upon completion of the course, a proficient student will have foundational knowledge of business and business-related occupations and concepts, including management, finance, marketing, and entrepreneurship and how each intertwines. Recommended for students who seek a general background and overview of business."}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="Entrepreneurship"
            />
            <View style={{ marginTop: width * 0.06 }}></View>
            <teacher
               info="aaaaa"
               imageUri={require("../assets/TeacherHeadshots/GOAT.jpg")}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="Entrepreneurship 1"
               accn="ACCN: TBE2000"
               info={'Entrepreneurship 1 is the second course in the Entrepreneurship program of study designed to inform students about careers related to starting and running a business. Students prepare for the business world by examining basic principles in management, finance, and marketing as they apply to entrepreneurship. Upon completion of the course, a proficient student will be able to describe the foundations of small business operations and how entrepreneurship intertwines to create the fabric of the labor market. Recommended for students who are interested in establishing their own business.'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="Entrepreneurship 2"
               accn="ACCN: TBE3000"
               info={"Entrepreneurship 2 is the third course in the Entrepreneurship program of study designed to prepare students for the world of small business by combining principles in operations, finance and accounting, marketing, and ethical practices. Upon completion of the course, a proficient student will be able to begin an internship with a small business owner or entrepreneurship incubator to lay the foundation for creating a small business using the ideas and proposal elements created in this course. Recommended for students who are interested in establishing their own business"}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="Financial Management"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <teacher
               info="aaaaa"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="Principles of Finance & Economics"
               accn="ACCN: TBP2000"
               info={'Principles of Finance & Economics is the second course for Financial Management program of study designed to inform students about the basics of economics, finance, and accounting. Upon completion of the course, a proficient student will have a basic knowledge of finance and economics, accounting principles and taxation issues, and consumer credit and protection. Recommended for students who are interested in pursuing a career in banking, finance, or accounting.'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Business/Accounting.jpg")}
               header="Accounting"
               accn="ACCN: TBT3000"
               info={"Accounting is the third course for Financial Management program of study designed to inform students about basic procedures of accounting. Upon completion of the course, a proficient student will demonstrate various accounting and basic business transactions, and apply the full accounting cycle, analyze financial data, and explain ethical behavior in the accounting field. Recommended for students who are interested in pursuing a career in banking, finance, or accounting."}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <SmallHeader
               header="Marketing Management"
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoR
               imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
               header="Advertising and Public Relations"
               accn="ACCN: TBR2000"
               info={'Advertising & Public Relations is the second course in the Marketing Management program of study designed to prepare students for the marketing world by examining basic principles in advertising, such as market segmentation, research, and building promotional campaigns. Upon completion of this course, a proficient student will be able to describe and apply multiple aspects of advertising and public relations concepts that keep a business in the consumer’s mind through channels such as print, social media, and public relations. Recommended for students who are interested in pursuing a career in marketing.'}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <ImageInfoL
               imageUri={require("../assets/Business/DigitalMarketing.jpg")}
               header="Digital Marketing and Market Analytics"
               accn="ACCN: TBD3000"
               info={"Digital Marketing & Market Analytics is the third course in the Marketing Management program of study designed to in social media marketing. Upon completion of the course, a proficient student will be able to describe and apply the process of building a promotional campaign through digital means and the applied use of data contained in these methods to drive market research. Recommended for students who are interested in pursuing a career in marketing. "}
            />
            <View style={{ marginTop: width * 0.10 }}></View>
            <Footer />
         </ScrollView>

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
      backgroundColor: Colors.primary,
      alignItems: 'center'
   },
   c1Title: {
      fontSize: 75,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium',
      marginBottom: 25
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
      marginBottom: 20
   },
   studentImg: {
      height: 250,
      width: 250,
      margin: 20
   },
   c2cHeader: {
      fontSize: 40,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium'
   },
   margin: {
      marginTop: 20
   },
   videoChunk: {
      marginTop: 100,
      marginBottom: 150,
      height: 600,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
   },
   video: {
      marginBottom: 50,
      width: 640
   }
})
