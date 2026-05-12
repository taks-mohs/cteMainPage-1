import { View, StyleSheet, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import Footer from "../components/footer"
import { YouTubePlayer } from "../components/Youtube"
import AutoRoadmap from "../assets/Automotive/AutoRoadmap.png"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import ChangingBgs from '../components/Templates/ChangingBackground';

const backgrounds = [
  { id: 0, uri: require('../assets/Automotive/autoshop.png') },
  { id: 1, uri: require('../assets/Automotive/autotech.jpg') },
  { id: 2, uri: require('../assets/Automotive/automain.jpeg') }
]

export default function Automotive() {
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
          text={'Automotive Maintenance'}
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <YouTubePlayer style={{ width: width * 3.5 * 0.175, height: width * 3.5 * 0.105, alignSelf: "center", paddingTop: 24 }}
          modestBranding={true} autoplay={false} mute={false} videoId="wZK4Ysvk7ik"
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <Image source={AutoRoadmap} resizeMode="contain" style={{ alignSelf: 'center', aspectRatio: 1, width: width * 0.7, height: height * 0.7 }} />
        <View style={{ marginTop: width * 0.1 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Foundations of Auto Maintenance & Light Repair"
          accn="ACCN: THF1000"
          info={"Introduction to Automotive Maintenance and Light Repair (MLR) is an introductory course designed to inform students about careers in automotive repair, as well as basic safety and service skills. This course serves as the foundation course for the Automotive MLR program of study. Upon completion of the course, a proficient student will have foundational knowledge of safety in the workplace, technician service skills, and basic engine and tire maintenance. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Auto Maintenance & Light Repair 1"
          accn="ACCN: TTA2000"
          info={'The Maintenance and Light Repair (MLR) 1 course is the second course in the Automotive MLR program of study designed to inform students about automotive general electrical systems, starting and charging systems, batteries, lighting, and electrical accessories. Upon completion of the course, a proficient student will perform diagnostic services and service and/or repair vehicle electrical systems, electrical accessories, and charging systems. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Required: Successful completion of THF1000.and instructor’s recommendation.'}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Auto Maintenance & Light Repair 2"
          accn="ACCN: TTA3000"
          info={"The Maintenance and Light Repair (MLR) 2 course is the third course in the Automotive MLR program of study designed to inform students about suspension and steering systems and brake systems. Upon completion of the course, a proficient student will perform inspection services and service and/or repair vehicle suspension and steering systems and brake systems. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Required: Successful completion of Auto Maint. & Lt. Rep 1 (TTA2000) and instructor’s recommendation."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Auto Maintenance & Light Repair 3"
          accn="ACCN: TTA4000"
          info={'The Maintenance and Light Repair (MLR) 3 course is the fourth course in the Automotive MLR program of study designed to inform students about heating and A/C systems, engine performance systems, and transmission/transaxles. Upon completion of the course, a proficient student will perform inspection services and service and/or repair heating and A/C systems, engine performance systems, and automatic and manual transmission/transaxles. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Required: Successful completion of TTF1000, TTA2000, TTA3000 and instructor’s recommendation.'}
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
