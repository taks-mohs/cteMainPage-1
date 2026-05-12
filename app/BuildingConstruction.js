import { View, StyleSheet, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import Footer from "../components/footer"
import { YouTubePlayer } from "../components/Youtube"
import ConstructionRoadmap from "../assets/Construction/ConstructionRoadmap.png"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import ChangingBgs from '../components/Templates/ChangingBackground';

const backgrounds = [
  { id: 0, uri: require('../assets/Construction/B_Cbg.png') },
  { id: 1, uri: require('../assets/Construction/constructionBG.png') },
  { id: 2, uri: require('../assets/Construction/planning.jpg') }
]

export default function BuildingConstruction() {
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
          text={'Building & Construction'}
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <YouTubePlayer style={{ width: width * 3.5 * 0.175, height: width * 3.5 * 0.105, alignSelf: "center", paddingTop: 24 }}
          modestBranding={true} autoplay={false} mute={false} videoId="ErapjckWK5o"
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <Image source={ConstructionRoadmap} resizeMode="contain" style={{ alignSelf: 'center', aspectRatio: 1, width: width * 0.7, height: height * 0.7 }} />
        <View style={{ marginTop: width * 0.1 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Foundations of Construction"
          accn="ACCN: TCF1000"
          info={"Foundations of Construction is an introductory course designed to inform students about careers in building and construction. This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study. Upon completion of this course, a proficient student will be able to describe various construction occupations and outline the steps necessary to advance in specific construction careers. Students will be able to employ tools safely, explain building systems and materials, and interpret basic construction drawings to complete projects, demonstrating proper measurement and application of mathematical concepts."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Residential & Commercial Construction 1"
          accn="ACCN: TCR2000"
          info={'Residential & Commercial Construction 1 is the second course in the Residential & Commercial Construction program of study intended to have students develop an understanding of the different phases of a construction project from start to finish. Upon completion of this course, a proficient student will be able to demonstrate knowledge and skills in the early phases of building construction, including site layout, concrete and floor to ceiling systems. Pre-requisite: Successful completion of TCF1000 and instructor’s recommendation.'}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Residential & Commercial Construction 2"
          accn="ACCN: TCR3000"
          info={"Residential & Commercial Construction 2 is the third course in the Residential & Commercial Construction program of study designed to allow students to develop an understanding of the different phases of a construction project from start to finish. Upon completion of this course, a proficient student will be able to demonstrate knowledge and skill in the later phases of building construction including roofing systems, exterior finishing, stair framing systems, masonry systems, and MEP systems. Students will be able to perform masonry work, frame roofs, install shingles on roofs, apply exterior finishes, and build and install stairs while safely employing tools and interpreting construction drawings to complete projects."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Residential & Commercial Construction: Work-Based Learning"
          accn="ACCN: TCR4100"
          info={'Residential & Commercial Construction: WBL is the capstone course in the Residential & Commercial Construction program of study. It is intended to provide a work-based learning experience for students to develop further understanding of professional and ethical issues, utilize employability skills, and demonstrate mastery of academic and technical skills. Upon completion of the course, a proficient student will be able to discern multiple pathways to a career in construction, necessary steps toward applying for a postsecondary credentialed program or applying for a job. Instruction will be delivered through the classroom environment in conjunction with a work-based learning placement, such as an internship or apprenticeship.'}
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
