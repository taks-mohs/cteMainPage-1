import { VideoView, useVideoPlayer } from "expo-video"
import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import ImagelessInfoChunk from '../components/Templates/ImagelessInfoChunk'
import { YouTubePlayer } from "../components/Youtube"

export default function Health() {
  // const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
  const { height, width } = useWindowDimensions()
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    bgImg: {
      flex: 1,
      width: '100%',
      resizeMode: 'cover'
    }
  })

  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/Health/Health.jpeg')}>
        <ScrollView>
          <View style={{ marginTop: width * 0.05 }}></View>
          <HeaderChunk
            header="Health Services"
          />
          <View style={{ marginTop: width * 0.05 }}></View>

          <Chunk2R
            header="Information"
            info={[
              <ImagelessInfoChunk
                infoHeader="Description"
                infoBody="The Health Services Career and Technical Education (CTE) branch in high school offers students a pathway to explore various healthcare careers. Through specialized courses and often hands-on experiences, students can learn foundational medical knowledge, develop essential skills like patient care and medical terminology, and even gain industry certifications. This branch aims to prepare students for further education in healthcare or entry-level positions in the medical field."
              />,
              <ImagelessInfoChunk
                infoHeader="Potetntial Careers"
                infoBody='• Athletic Trainer
• Cardiovascular Technologist
• Dental Hygienist
• Emergency Medical Technician (EMT)
• Home Health Aide
• Licensed Practical Nurse (LPN)
• Medical Assistant
• Nursing Assistant (CNA)
• Occupational Therapist
• Paramedic
• Pharmacist
• Physical Therapist
• Physician
• Registered Nurse (RN)
• Respiratory Therapist
• Surgical Technician'

              />


            ]}
          />

          <View style={{ marginTop: width * 0.05 }}></View>

          <Chunk2L
            header="Related Classes"
            info={[
              <Chunk2Info
                infoHeader="Foundations of Health Services(lvl 1)"
                image={require('../assets/Health/Foundation 1.png')}
                infoBody="Foundations of Health Services is an introductory course designed to inform students about careers in the Health Services field, as well as basic 
                      medical skills and terminology."
              />,
              <Chunk2Info
                infoHeader="Advanced Health Services (lvl 2)"
                image={require('../assets/Health/Foundation 2.png')}
                infoBody="Advanced Health Services is the second course for the Human Performance Therapeutic Services, and Nursing Services programs of study."
              />,
              <Chunk2Info
                infoHeader="Nursing Services 1 (lvl 3)"
                image={require('../assets/Health/Nurse 1.png')}
                infoBody="Nursing Services 1 is the third course in the Nursing Services program of study and is an applied course designed to develop the skills necessary for a career in nursing."
              />,
              <Chunk2Info
                infoHeader="Nursing Services 2 (lvl 4)"
                image={require('../assets/Health/Nurse 2.png')}
                infoBody="Nursing Services 2 is the fourth course in the Nursing Services program of study designed to inform and develop the skills necessary for a career in nursing, including awareness of varying levels of occupations and credentials available in the field."
              />
            ]}
          />
          <View style={{ marginTop: width * 0.05 }}></View>
          <Chunk2R
            header="Teachers"
            info={[
              <Chunk2Info
                infoHeader="Mrs. Hashizume"
                image={require('../assets/TeacherHeadshots/Hashizume-L.jpg')}
                infoBody=" Foundation of Health Services Teacher."
              />,
              <Chunk2Info
                infoHeader="Ms. Harada"
                image={require('../assets/smile.png')}
                infoBody="Nursing Services Teacher."
              />,

            ]}
          />

          <View style={{ marginTop: width * 0.05 }}></View>

          <Chunk2L
            header="RELATED CLUB"
            info={[
              <Chunk2Info
                infoHeader="HOSA"
                image={require('../assets/Health/HOSA picture.png')}
                infoBody="Moanalua High School offers HOSA (Health Occupations Students of America) as a club for students interested in pursuing careers in the health field. HOSA is a national organization that promotes career opportunities in the health care industry and enhances the delivery of quality health care to all people. The mission of HOSA is to promote career opportunities in the health care industry and to enhance the delivery of quality health care to all people."


              />
            ]}

          />
          <View style={{ marginTop: width * 0.1 }}></View>

          <View style={{ alignItems: 'center', }}>
            <YouTubePlayer style={{ height: 500, width: 500, }}
              videoId='Di_M-7WFFuA'
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
    height: '100%',
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
  c1Button: {
    fontSize: 25,
    padding: 10,
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    fontFamily: 'oswaldsemibold'
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
    marginLeft: 200,
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
    textAlign: 'center'
  },
  studentImg: {
    height: 250,
    width: 250
  },
  c2cHeader: {
    fontSize: 40,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium',
    textAlign: "center"
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
    marginHorizontal: 100
  },
  classesList: {
    fontSize: 30,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium',
    marginBottom: 5
  }
})