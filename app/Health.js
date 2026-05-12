import { View, StyleSheet, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import Footer from "../components/footer"
import { YouTubePlayer } from "../components/Youtube"
import HealthRoadmap from "../assets/Health/HealthRoadmap.png"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import ChangingBgs from '../components/Templates/ChangingBackground';

const backgrounds = [
  { id: 0, uri: require('../assets/Health/Foundation 1.png') },
  { id: 1, uri: require('../assets/Health/Foundation 2.png') },
  { id: 2, uri: require('../assets/Health/Nurse 1.png') }
]

export default function Health() {
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
          text={'Health Services'}
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <YouTubePlayer style={{ width: width * 3.5 * 0.175, height: width * 3.5 * 0.105, alignSelf: "center", paddingTop: 24 }}
          modestBranding={true} autoplay={false} mute={false} videoId="l9SNTt6zUXE"
        />
        <View style={{ marginTop: width * 0.05 }}></View>
        <Image source={HealthRoadmap} resizeMode="contain" style={{ alignSelf: 'center', aspectRatio: 1, width: width * 0.7, height: height * 0.7 }} />
        <View style={{ marginTop: width * 0.1 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Foundations of Health Services"
          accn="ACCN: THF1000"
          info={"Foundations of Health Services is an introductory course designed to inform students about careers in the Health Services field, as well as basic medical skills and terminology. Upon completion of the course, a proficient student will have foundational knowledge of various medical careers, foundational healthcare skills, safety skills, traditional Hawaiian health care philosophies, and ethics. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Recommended for students who seek a general background and overview of the healthcare profession."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Advanced Health Services"
          accn="ACCN: THA2000"
          info={'Advanced Health Services is the second course for the Human Performance Therapeutic Services, and Nursing Services programs of study. It is designed to develop student understanding of the structures and functions of the human body. Upon completion of the course, a proficient student will be able to characterize the functions of various organs and body systems and their interplay with one another in the human body. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio providing evidence of mastery of the course standards and readiness to advance and complete the program of study. Recommended pre-requisite: Successful completion of Foundations of Health Services (THF1000) and teacher’s approval are required.'}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoL
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Nursing Services 1"
          accn="ACCN: THS3000"
          info={"Nursing Services 1 is the third course in the Nursing Services program of study and is an applied course designed to develop the skills necessary for a career in nursing. Upon completion of the course, a proficient student will be able to assess, monitor, evaluate, and report patient/client health status, apply safety and wellness protocols, and communicate effectively with the patient and family members. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio providing evidence of mastery of the course standards and readiness to advance and complete the program of study. Recommended pre-requisite: Successful completion of Adv. Health Services [THA2000] and instructor’s approval."}
        />
        <View style={{ marginTop: width * 0.10 }}></View>
        <ImageInfoR
          imageUri={require("../assets/Fashion/IMG_5437.jpeg")}
          header="Nursing Services 2"
          accn="ACCN: THS4000"
          info={'Nursing Services 2 is the fourth course in the Nursing Services program of study designed to inform and develop the skills necessary for a career in nursing, including awareness of varying levels of occupations and credentials available in the field. Upon completion of the course, a proficient student will be able to demonstrate patient care and wellness techniques, infection control protocols, and basic nursing responsibilities associated with various healthcare facilities. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio providing evidence of mastery of the course standards and readiness to advance and complete the program of study. Recommended pre-requisites: Successful completion of Nursing Services 1 [THS3000] and instructor’s approval.'}
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
