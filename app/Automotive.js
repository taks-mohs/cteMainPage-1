import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'

export default function Auto() {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/autoshop.png')}>
        <ScrollView>
          <HeaderChunk header="Automotive" />
          <View style={{ marginTop: width * 0.05 }}></View>
          <Chunk2L
            header="Related Classes"
            info={[
              <Chunk2Info
                infoHeader="Foundations of Auto Maintenance and Light Repair (9, 10, 11, 12)"
                image={require('../assets/foundation.jpg')}
                infoBody="For all grades 9-12, this course is designed to provide students with the knowledge and skills necessary to perform basic automotive maintenance and light repair tasks. Students will learn about the various systems of a vehicle, including the engine, transmission, brakes, and electrical systems. The course will also cover safety procedures, tools and equipment used in the automotive industry, and basic troubleshooting techniques."
              />,
              <View style={{ marginTop: width * 0.025 }}></View>,
              <Chunk2Info
                infoHeader="Auto Maintenance and Light Repair 1 (10, 11, 12)"
                image={require('../assets/automain.jpeg')}
                infoBody="For grades 10-12, this course builds on the knowledge and skills learned in Foundations of Auto Maintenance and Light Repair. Students will gain hands-on experience in performing more advanced automotive maintenance and repair tasks, including engine diagnostics, brake systems, and electrical systems. The course will also cover industry standards and practices, as well as customer service skills."
              />,
              <Chunk2Info
                infoHeader="Auto Maintenance and Light Repair 2 (11, 12)"
                image={require('../assets/autotech.jpg')}
                infoBody="For grades 11-12, this course is a continuation of Auto Maintenance and Light Repair 1. Students will further develop their skills in automotive maintenance and repair, with a focus on advanced diagnostics and troubleshooting techniques. The course will also cover industry certifications and career opportunities in the automotive field."
              />
            ]}
          />

          <View style={{ marginTop: width * 0.05 }}></View>

          <Chunk2R
            header="Teachers"
            info={[
              <Chunk2Info
                infoHeader="Mr. Andersson"
                image={require('../assets/andersson.jpg')}
                infoBody="Automotive Teacher"
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
    textAlign: 'center'
  }
})