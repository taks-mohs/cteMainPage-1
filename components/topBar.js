import { View, Text, Image, Pressable, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity, Animated, Modal } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'
import { useState, useRef } from 'react';
import { Dropdown } from 'react-native-element-dropdown'
import { router } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation, NavigationContainer, } from '@react-navigation/native';

export default function topBar() {
  const [modalVisible, setModalVisible] = useState(false);

  const spinValue = useRef(new Animated.Value(0)).current;
  const [hovered, setHovered] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    Animated.timing(spinValue,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const { width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })
  const [query, setQuery] = useState('');


  const HoverableText = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <TouchableOpacity
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Text style={[styles.topButtonStyle, { color: isHovering ? 'gray' : Colors.primary }]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  };

  function searchHandle() {
    if (query.trim() !== '') {
      router.replace({ "pathname": "./results", params: { queryData: query } }); // Pass myData as a parameter
    }
  }
  const styles = StyleSheet.create({
    topBar: {
      height: 90,
      padding: width * 0.001,
      alignItems: 'center',
      backgroundColor: Colors.secondary,
      flexDirection: 'row',
      height: width * 0.07
    },
    topImageStyle: {
      marginLeft: width * 0.03,
      height: width * 0.05,
      width: width * 0.05
    },
    titleStyle: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: width * 0.015,
      marginLeft: width * 0.01,
      marginRight: width * 0.1,
      fontFamily: 'oswaldsemibold'
    },
    topButtonStyle: {
      color: Colors.primary,
      fontSize: width * 0.015,
      marginRight: width * 0.02,
      fontFamily: 'oswaldmedium'
    },
    dropdownButtonStyle: {
      color: Colors.secondary,
      fontSize: width * 0.015,
      fontFamily: 'oswaldmedium'
    },
    dropdownContainer: {
      backgroundColor: Colors.primary,
      height: width * 0.25,
      width: width * 0.1,
    },
    searchContainer: {
      borderWidth: 2,
      borderColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    searchStyle: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      fontFamily: 'oswaldmedium',
      opacity: 0.5,
      marginLeft: width * 0.01
    },
    placeholder: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      marginLeft: width * 0.01
    },
    department: {
      height: width * 0.25,
      width: width * 0.5,
    },
    popUpContainer: {
      height: width * 0.25,
      width: width * 0.5,
      alignSelf: 'center',
      justifyContent: 'center'
    }
  })



  return (
    <View style={styles.topBar}>
      <View
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={'/'}>
          <Pressable>
            <Animated.Image
              source={require('../assets/download.jpg')}
              style={[styles.topImageStyle, { transform: [{ rotate: spin }] }]} />
          </Pressable>
        </Link>

      </View>
      <Link href={'/'}>
        <Pressable>
          <Text style={styles.titleStyle}>Career & Technical Education</Text>
        </Pressable>
      </Link>

      <Pressable
        style={styles.department}
        onHoverIn={() => setModalVisible(true)}
      >
        <Text style={styles.topButtonStyle}>
          Department
        </Text>
        <Modal
          transparent={true}
          visible={modalVisible}
        >
          <Pressable
            style={styles.popUpContainer}
            onHoverOut={() => setModalVisible(false)}
          >

          </Pressable>
        </Modal>

      </Pressable>

      <Link href={'/staff'}>
        <Pressable>
          <HoverableText>Staff</HoverableText>
        </Pressable>
      </Link>

      <Link href={'/contactus'}>
        <Pressable>
          <HoverableText>Contact Us</HoverableText>
        </Pressable>
      </Link>

      <Link href={'/about'}>
        <Pressable>
          <HoverableText>About</HoverableText>
        </Pressable>
      </Link>

      <View style={styles.searchContainer}>
        <Pressable onPress={searchHandle}>
          <FontAwesome style={styles.placeholder} name="search" size={20} color="white" />
        </Pressable>

        <TextInput
          style={styles.searchStyle}
          placeholder='Search'
          onSubmitEditing={searchHandle}
          onChangeText={text => setQuery(text)}
          value={query}
        />
      </View>
    </View>
  )
}
