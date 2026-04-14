import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import TopBar from '../components/topBar'
import TeacherDescription from '../components/TeacherDescription';

export default function staff() {
  const [gSheetData, setGSheetData] = useState([])

  const SPREADSHEET_ID = '1l32G1-PxkKI23DU9AGi7EtbOCRKyhIBvEZ_cFF28OvA';
  const SHEET_NAME = 'Sheet1';
  const API_KEY = 'AIzaSyBCYdzVQPtp3AYbrUIvOSv2uTCrm96zhc0';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      const keys = result.values[0];
      const data = result.values.slice(1);
      const formatted = data.map(arr => Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] }))));

      if (JSON.stringify(formatted) !== JSON.stringify(gSheetData)) {
        setGSheetData(formatted);
      }
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: 'https://hawaiipublicschools.org/wp-content/uploads/Moanalua-HS-BANNER.jpg' }}
      />
      <TopBar />
      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={gSheetData}
          renderItem={({ item }) =>
            <TeacherDescription
              name={item.name}
              source={item.source}
              description={item.description}
            />}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // dim: {
  //   alignSelf: 'center',
  //   position: "absolute",
  //   flex: 1,
  //   backgroundColor: '#000000c7'
  // },
  backgroundImage: {
    alignSelf: 'center',
    opacity: '63%',
    position: "absolute",

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  addScroll: {
    margin: 1000,
  },
  scrollContainer: {
    flex: 1,
  },

})