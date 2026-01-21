import { StyleSheet, Image, Text, TextInput, Pressable, View, ImageBackground, ScrollView } from 'react-native'
import Colors from '../components/colors'

function HomePage() {
  return (
    <View style={styles.background}>
      <View style={styles.topBar}>
        <Image
          style={styles.topImageStyle}
          source={require('../assets/download.jpg')}
        />
        <Text style={styles.titleStyle}>Career & Technical Education</Text>
        <Pressable>
          <Text style={styles.topButtonStyle}>Departments</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.topButtonStyle}>Staff</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.topButtonStyle}>About</Text>
        </Pressable>
        <View style={styles.searchContainer}>
          <Text style={styles.placeholder}>⌕</Text>
          <TextInput
            style={styles.searchStyle}
            placeholder='Search'
          />
        </View>
      </View>
      <View>
      <ScrollView>

        <View style={styles.chunk1}>
          <Text style={styles.c1Title}>Find Your Pathway</Text>
          <Pressable>
            <Text style={styles.c1Button}>Searching Tool</Text>
          </Pressable>
        </View>

        <View style={styles.chunk2}>
          <Text style={styles.c2title}>Testimonies</Text>
          <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
            <View style={styles.break}></View>
            <View style={styles.c2chunk}>
              <Text style={styles.c2cHeader}>Student Name</Text>
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
              <Text style={styles.c2cHeader}>Student Name</Text>
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
              <Text style={styles.c2cHeader}>Student Name</Text>
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
              <Text style={styles.c2cHeader}>Student Name</Text>
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
              <Text style={styles.c2cHeader}>Student Name</Text>
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
        </View>
      </ScrollView>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  bgImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  topBar: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    flexDirection: 'row'
  },
  topImageStyle: {
    marginLeft: 15,
    height: 75,
    width: 75
  },
  titleStyle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 15,
    marginRight: 250,
    fontFamily: 'oswaldsemibold'
  },
  topButtonStyle: {
    color: Colors.primary,
    fontSize: 25,
    marginRight: 25,
    fontFamily: 'oswaldmedium'
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchStyle: {
    color: Colors.primary,
    fontSize: 25,
    fontFamily: 'oswaldmedium',
    opacity: 0.5,
    marginLeft: 10
  },
  placeholder: {
    color: Colors.primary,
    fontSize: 25,
    marginLeft: 10
  },
  chunk1: {
    marginTop: 500,
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
  c2chunk: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 75
  },
  c2cHeader: {
    fontSize: 40,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium'
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
  break: {
    margin: 40
  }
})