import { Text, View, Image, StyleSheet, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'
import { useState, useRef } from 'react';
import { Link, useRouter } from 'expo-router';

export default function footer() {
  const router = useRouter();

  const { width, height } = useWindowDimensions();
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const HoverableText = ({ children, style }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <TouchableOpacity
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Text style={[style, { color: isHovering ? '#327da8' : Colors.primary }]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    logo: {
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
      width: 150,
      height: 150,
    },
    bottom: {
      flex: 1,
      width: width,
      height: height * 0.4,
      backgroundColor: Colors.secondary,
      padding: width * 0.05,
    },
    columns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    column: {
      minWidth: 140,
      alignItems: 'flex-start',
    },
    header: {
      color: Colors.primary,
      fontWeight: '700',
      marginBottom: 10,
      fontSize: 18,
    },
    info: {
      color: Colors.primary,
      fontSize: 16,
      marginBottom: 4,
    },
    link: {
      color: Colors.primary,
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5
    }
  })

  return (
    <View style={styles.bottom}>
      <View style={styles.columns}>
        <View style={styles.column}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.header}>
            Moanalua High School
          </Text>
          <Text style={styles.info}>
            2825 Ala Ilima St, Honolulu, HI 96818
          </Text>
          <Text style={styles.info}>
            Phone: (808) 305-1000
          </Text>
          <Text style={styles.info}>
            Fax: (808) 831-7919
          </Text>
        </View>
        <View style={styles.column}>
          <Link href={'/Automotive'}>
            <Pressable>
              <HoverableText style={styles.link}>Automotive</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/BuildingConstruction'}>
            <Pressable>
              <HoverableText style={styles.link}>Building Construction</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Business'}>
            <Pressable>
              <HoverableText style={styles.link}>Business</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/ComputerScience'}>
            <Pressable>
              <HoverableText style={styles.link}>Computer Science</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Culinary'}>
            <Pressable>
              <HoverableText style={styles.link}>Culinary</HoverableText>
            </Pressable>
          </Link>
        </View>
        <View style={styles.column}>
          <Link href={'/Engineering'}>
            <Pressable>
              <HoverableText style={styles.link}>Engineering</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Fashion'}>
            <Pressable>
              <HoverableText style={styles.link}>Fashion</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Film'}>
            <Pressable>
              <HoverableText style={styles.link}>Film</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Graphics'}>
            <Pressable>
              <HoverableText style={styles.link}>Graphics</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/Health'}>
            <Pressable>
              <HoverableText style={styles.link}>Health Services</HoverableText>
            </Pressable>
          </Link>
        </View>
        <View style={styles.column}>
          <Link href={'/about'}>
            <Pressable>
              <HoverableText style={styles.link}>About</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/staff'}>
            <Pressable>
              <HoverableText style={styles.link}>Staff</HoverableText>
            </Pressable>
          </Link>
          <Link href={'/contactus'}>
            <Pressable>
              <HoverableText style={styles.link}>Contact</HoverableText>
            </Pressable>
          </Link>

        </View>
      </View>
    </View>
  )
}