/*import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"*/
import { StyleSheet, View, Image, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import FilmRoadmap from "../assets/Film/FilmRoadmap.png"
import VisualArtsSuggested from '../assets/VisualArtsSuggested.png'
import ChangingBgs from "../components/Templates/ChangingBackground"
import ImageInfoL from '../components/Templates/CourseInfoPictureR'
import ImageInfoR from '../components/Templates/CourseInfoPictureL'
import SmallHeader from '../components/Templates/SmallHeader'

const backgrounds = [
   { id: 0,  uri: require('../assets/Business/tax.jpg') },
   { id: 1,  uri: require('../assets/Health/Health.jpeg') },
   { id: 2,  uri: require('../assets/CS/MiscImages/CSbackground.jpeg') }
]

export default function Film() {
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
         <ScrollView>
            <ChangingBgs
               backgrounds={backgrounds}
               dimness={'#00000096'}
               fontSize={80}
               textColor={'white'}
               barWidth={'50%'}
               barColor={Colors.secondary}
               text={'Film'}
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
    /*<View style={styles.background}>
        <TopBar />
        <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
            <ScrollView>
                <View style={styles.chunk1}>
                    <Text style={styles.c1Title}>Film</Text>
                </View>
                <View style={styles.chunk2}>
                    <Text style={styles.c2title}>Related Classes</Text>
                    <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                        <View style={styles.break}></View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Foundations of Creative Media</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                            Foundations of Creative Media is an introductory course designed to inform students about careers in digital film production. This Level 1 course serves as the foundation course for the Film & Media Production programs of study. Upon completion of the course, a proficient student will be able to explain principles of digital design and its influences, demonstrate basic knowledge of digital camera and video equipment and storytelling, and create videos using design and equipment knowledge including PSAs, music videos and sports highlights. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study.

                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Digital Video Technology:</Text>
                            <Text style={styles.c2cHeader}>Video Production OR Broadcast</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                            Digital Video Technology is the second course in the Film & Media Production program of study designed to introduce students to the advanced production process for digital film/video in either film or broadcast media focused content. Upon completion of the course, a proficient student will be able to demonstrate not just basic digital video and audio recording skills, and video and audio uploading and editing techniques, but also content specific skills that include interviewing, scripting, and the use of fx. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Successful completion of Foundations of Creative Media (TCC1000M) and Teacher Approval Required
                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Film & Media Production 1:</Text>
                            <Text style={styles.c2cHeader}>Video Production OR Broadcast</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                            Film & Media Production 1 is the third course in the Film & Media Production program of study designed to introduce students to industry and equipment skills used in film and broadcast production. Upon completion of the course, a proficient student will demonstrate basic production plan process skills including script writing, storyboard creation or shot list planning, stage setting, lighting equipment and video/audio recording and production editing. Students will complete advance projects in their focused content (broadcast or film). A proficient student will also demonstrate basic safety knowledge and protocols that are followed throughout a production process. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Recommended Prerequisite: Completion of Foundations of Creative Media [TCC1000M] and Digital Video Technology [TCV2000M]. Teacher Approval Required 
                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Film & Media Production 2:</Text>
                            <Text style={styles.c2cHeader}>Video Production OR Broadcast</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                            Film & Media Production 2 is the fourth course in the Film & Media Production program of study designed to have students produce original digital short films, documentaries, and/or larger projects in their film or broadcast focused course. Students will utilize production equipment and editing software in varying degrees of complexity. Students will participate in and complete multiple projects that require crew/group effort. Upon completion of the course, a proficient student will be able to create a script, design a shot list, create a complete film or documentary production plan, and implement the plan to create an original creative work. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio providing evidence of mastery of the course standards and readiness to advance and complete the program of study. Teacher Approval Required. 
                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Film & Media Production:</Text>
                            <Text style={styles.c2cHeader}>Work Based Learning</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                            Film & Media Production: WBL is the capstone course in the Film & Media Production program of study. It is intended to provide a work-based learning experience for students to develop further understanding of professional issues, utilize employability skills, and demonstrate mastery of academic and technical skills learned throughout this program of study. The work-based learning experience provides opportunities to apply and practice the knowledge and skills learned in previous courses and gives students hands-on practical experiences related to professions in film and media production. Upon completion of the course, a proficient student will be able to discern multiple pathways to a career in film and media production, necessary steps toward applying for a postsecondary program, necessary steps toward applying for a job, and reflect on program goals and aspirations. Instruction will be delivered through the classroom environment in conjunction with a work-based learning placement, such as an internship. The student will finalize a digital course portfolio providing evidence of mastery of the program standards and readiness for postsecondary and the workforce. Teacher Approval Required 
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.chunk2}>
                    <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                        <View style={styles.break}></View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Club Activity 1</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Club Activity 2</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </Text>
                        </View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Club Activity 3</Text>
                            <Image
                                source={require('../assets/placeholder.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </Text>
                        </View>
                    </ScrollView>
                    <Text style={styles.c3title}>Clubs</Text>
                </View>
                <View style={styles.chunk2}>
                    <Text style={styles.c2title}>Teachers</Text>
                    <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                        <View style={styles.break}></View>
                        <View style={styles.c2chunk}>
                            <Text style={styles.c2cHeader}>Mr. Zavala</Text>
                            <Image
                                source={require('../assets/Film/zavala_image.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                                Mr. Zavala is a teacher for the Film class at Moanalua High School. He currently resides in G201. I do not have any more info to put here, this text is just to show formatting. There could be more information, and it would look something like this. However, at this time, this is the description I wrote because it was all the information I had at the time.
                            </Text>
                            <Text style={styles.c2cHeader}>Mr. Ikenaga</Text>
                            <Image
                                source={require('../assets/Film/ikenaga_image.jpg')}
                                style={styles.studentImg}
                            />
                            <Text style={styles.c2cBody}>
                                Mr. Ikenaga is a teacher for the Film class at Moanalua High School. He currently resides in G201. I do not have any more info to put here, this text is just to show formatting. There could be more information, and it would look something like this. However, at this time, this is the description I wrote because it was all the information I had at the time.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </ImageBackground>
    </View>
    */
    // <View style={styles.background}>
    //   <TopBar />
    //   <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
    //     <ScrollView>
    //       <View style={{ marginTop: width * 0.05 }}></View>
    //       <HeaderChunk
    //         header="Film"
    //       />
    //       <Image source={FilmRoadmap} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
    //       <Image source={VisualArtsSuggested} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
    //       <View style={{ marginTop: width * 0.05, alignItems: 'center' }}></View>
    //       <Chunk2L
    //         header="Teachers"
    //         info={[
    //           <Chunk2Info
    //             infoHeader="Mr. Zavala"
    //             image={require('../assets/Film/zavala_image.jpg')}
    //             infoBody=''
    //           />,
    //           <Chunk2Info
    //             infoHeader="Mr. Ikenaga"
    //             image={require('../assets/Film/ikenaga_image.jpg')}
    //             infoBody=''
    //           />,
    //         ]}
    //       />
    //       <View style={{ marginTop: width * 0.05, alignItems: 'center' }}></View>
    //       <Chunk2R
    //         header="MeneMac"
    //         info={[
    //           <Chunk2Info
    //             infoHeader=""
    //             image={require('../assets/Film/camera_temp.jpg')}
    //             infoBody='The motto for MeneMac is "We Create to Inspire". The program is focused on learning how to create unique media, and proving those skills through projects and competitions. The MeneMac students work on a variety of topics, ranging from documentaries to promotionional features. To learn more about MeneMac and Film at Moanalua, visit the MeneMac website which is listed below.'
    //           />,
    //         ]}
    //       />
    //       <View style={{ marginTop: width * 0.05 }}></View>
    //       <Chunk1
    //         header="MeneMac Website"
    //         buttonlabel="Click Here"
    //         link="https://menemacmohs.weebly.com/"
    //       />
    //       <Footer />
    //     </ScrollView>
    //   </ImageBackground>
    // </View>
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
    textAlign: 'center'
  },
  studentImg: {
    height: 250,
    width: 250
  },
  c2cHeader: {
    fontSize: 40,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium'
  }
})