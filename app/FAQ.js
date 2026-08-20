import { StyleSheet, Image, Text, TextInput, Pressable, View, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import TopBar from '../components/topBar'
import Footer from '../components/footer'
import { useState } from 'react';

export default function FAQ() {
  const { width, height } = useWindowDimensions()
  const [fontsLoaded] = useFonts({
    Oswald_300Light,
    Oswald_600SemiBold,
    Oswald_500Medium
  })

  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  if (!fontsLoaded) {
    return null;
  }

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  
const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 100,
    marginTop: 50
  },
  header: {
    fontSize: 24,
    fontFamily: 'Oswald_600SemiBold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 50,
  },
  question: {
    fontSize: 18,
    fontFamily: 'Oswald_500Medium',
  },
  answer: {
    fontSize: 16,
    fontFamily: 'Oswald_300Light',
    marginTop: 10
  },
})

  return (
    <View>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/FAQ.webp')}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Frequently Asked Questions</Text>
          <View style={styles.faqItem}>
            <Pressable onPress={() => toggleQuestion(0)}>
              <Text style={styles.question}>Q: What is CTE?</Text>
            </Pressable>
            {openQuestionIndex === 0 && (
              <>
                <Image source={require('../assets/mohslogo.png')} style={{ width: 100, height: 100, marginTop: 10 }} />
                <Text style={styles.answer}>A: Career Technical Education (CTE) helps teach students about various careers in there classes. It opens gateways to their post high school careers. </Text>
              </>
            )}
          </View>
          <View style={styles.faqItem}>
            <Pressable onPress={() => toggleQuestion(1)}>
              <Text style={styles.question}>Q: What CTE Classes are Offered?</Text>
            </Pressable>
            {openQuestionIndex === 1 && (
              <>
                <Image source={require('../assets/mohslogo.png')} style={{ width: 100, height: 100, marginTop: 10 }} />
                <Text style={styles.answer}>A: Automotive, Business, Computer Science, Construction, Culinary, Engineering, Fassion, Graphics, Health Services, Media</Text>
              </>
            )}
          </View>
          <View style={styles.faqItem}>
            <Pressable onPress={() => toggleQuestion(2)}>
              <Text style={styles.question}>Q: Are the Classes Only One Year?</Text>
            </Pressable>
            {openQuestionIndex === 2 && (
              <>
                <Image source={require('../assets/mohslogo.png')} style={{ width: 100, height: 100, marginTop: 10 }} />
                <Text style={styles.answer}>A: All of our CTE Classes offer 3-4 years of the course, starting from our introduction course of the class, to a third or fourth year of the class.</Text>
              </>
            )}
          </View>
          <View style={styles.faqItem}>
            <Pressable onPress={() => toggleQuestion(3)}>
              <Text style={styles.question}>Q: How Do I Get CTE?</Text>
            </Pressable>
            {openQuestionIndex === 3 && (
              <>
                <Image source={require('../assets/mohslogo.png')} style={{ width: 100, height: 100, marginTop: 10 }} />
                <Text style={styles.answer}>A: Take at least 2 years of the same CTE course and complete the senior project assigned by the instructor near the end of the year.</Text>
              </>
            )}
          </View>
          <Footer />
        </ScrollView>
      </ImageBackground>
    </View>
  )
}