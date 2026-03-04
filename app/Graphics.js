import { Text, View, StyleSheet, ImageBackground, Pressable, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import { Link } from 'expo-router'
import GraphicsRoadmap from '../assets/Graphics/GraphicsRoadmap.png'
import VisualArtsSuggested from '../assets/VisualArtsSuggested.png'

export default function Graph() {
  const { height, width } = useWindowDimensions()


  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/Graphics/Graphics background.png')}>
        <ScrollView>
          <View style={{ marginTop: width * 0.05 }}></View>
          <HeaderChunk
            header="Graphics"
          />
          <Image source={GraphicsRoadmap} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
          <Image source={VisualArtsSuggested} resizeMode="contain" style={{alignSelf: 'center', aspectRatio: 1, width: width * 0.8, height: height * 0.615}} />
          <View style={{ marginTop: width * 0.05 }}></View>
          <Chunk2L
            header="Classes Info"
            info={[
              <Text style={styles.c2cHeader}>Creative Media</Text>,
              <Text style={{
                fontSize: width * 0.015,
                fontFamily: 'oswaldlight',
                textAlign: 'center',
                color: Colors.secondary
              }}>
                Creative Media is more hands-on with Graphics. In this course, students learn how to print shirts, make stickers, and create
                designs of their choosing. They utilize softwares known as Adobe Photoshop and Adobe Illustrator. The students are
                mainly up and out of their seats doing tasks given by the teacher.
              </Text>,
              <Text style={{
                paddingTop: 30,
                fontSize: 40,
                color: Colors.secondary,
                fontFamily: 'oswaldmedium',
                textAlign: 'center',
              }}>Digital Design</Text>,
              <Text style={{
                fontSize: width * 0.015,
                fontFamily: 'oswaldlight',
                textAlign: 'center',
                color: Colors.secondary
              }}>
                Digital Design is a class where students are utilizing the computers more. They also learn how to use
                softwares like Adobe Photoshop and Adobe Illustrator. Students are also given projects such as creating
                magazine ads, posters, labels, and personal brand designs.
              </Text>,
            ]}
          />

          <View style={{ marginTop: width * 0.05 }}></View>
          <Chunk2L
            header="Related Classes"
            primeColor="white"
            secondColor="#C7C7C7"
            info={[
              <Chunk2Info
                infoHeader="Foundations of Creative Media"
                image={require('../assets/Graphics/creativeMedia.jpg')}
                infoBody="Foundations of Creative Media is an introductory course designed to inform students about careers in creative media, including
                    digital design and digital film production. This Level 1 course serves as the foundation course for Digital Design program of study."
              />,
              <Chunk2Info
                infoHeader="Digital Design 1"
                image={require('../assets/Graphics/digitalDesign1.png')}
                infoBody="Digital Design 1 is the second course in the Digital Design program of study designed to introduce students to the digital design
                    process and the creation of basic design work and page layouts reflective of the process.
                    Recommended pre-requisite – Successful completion of Foundations of Creative Media."
              />,
              <Chunk2Info
                infoHeader="Digital Design 2"
                image={require('../assets/Graphics/digitalDesign2.jpg')}
                infoBody="Digital Design 2 is the third course in the Digital Design program of study designed to prepare students for advanced design work
                    in the field of digital design. Students will utilize various design software (development and editing) programs and camera/lighting
                    equipment in varying degrees of complexity to create web and 3-dimensional works.
                    Recommended pre-requisite – Successful completion of Digital Design 1 and instructor’s recommendation."
              />,
              <Text style={{
                fontSize: width * 0.015,
                fontFamily: 'oswaldlight',
                textAlign: 'center',
                paddingTop: 20,
                color: Colors.secondary
              }}>
                Refer to the Moanalua High School Course Catalog:
                Page 28 (The Icon Below is Pressable)
              </Text>,
              <Text>
                <Link href={'https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=28'}>
                  <View style={{ paddingLeft: 200 }}>
                    <Pressable>
                      <Image
                        source={require('../assets/blueLogo.png')}
                        style={styles.studentImg}
                      />
                    </Pressable>
                  </View>
                </Link>
              </Text>
            ]}
          />


          <View style={{ marginTop: width * 0.05 }}></View>
          <Chunk2R
            header="Assessments"
            primeColor="white"
            secondColor="#C7C7C7"
            info={[
              <Chunk2Info
                infoHeader="Info 1"
                image={require('../assets/placeholder.jpg')}
                infoBody="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />,
              <Chunk2Info
                infoHeader="Info 2"
                image={require('../assets/placeholder.jpg')}
                infoBody="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
              />,
              <Chunk2Info
                infoHeader="Info 3"
                image={require('../assets/placeholder.jpg')}
                infoBody="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
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
                infoHeader="Sean Nishimura"
                image={require('../assets/Graphics/nishimuraIMG.jpg')}
                infoBody="Mr. Nishimura teaches Graphics in Creative Media. In this class, he works with his students to print
                shirts for other clubs, classes, or sports. His students also learn how to incorporate their own designs through 
                other things."
              />,
              <Chunk2Info
                infoHeader="Na'a LeRoy Makekau"
                image={require('../assets/Fashion/makekau_pic.jpg')}
                infoBody="Mr. Makekau teaches Graphics in Digital Design. His students are given many projects throughout the year such as 
                creating a personal logo, magazine ads, posters, labels, and more. They spend most of their time working on the computer using 
                the following softwares: Adobe Photoshop and Adobe Illustrator."
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
  chunk1: {
    marginTop: 200,
    marginHorizontal: 150,
    padding: 75,
    backgroundColor: Colors.primary,
    alignItems: 'center',
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
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 75,
  },
  c2cBody: {
    fontSize: 18,
    fontFamily: 'oswaldlight',
    textAlign: 'center',
    paddingTop: 25,
  },
  studentImg: {
    height: 250,
    width: 250,
  },
  c2cHeader: {
    fontSize: 40,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium',
    textAlign: 'center',
  },

  imageRow: {
    flexDirection: 'row',
  }
})