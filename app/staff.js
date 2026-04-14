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
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      // const values = result.split(", ")
      console.log(result)
      console.log(result.values[0])
      // console.log(values)

      formatData(result)
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  function formatData(response) {
    const keys = response.values[0];
    const data = response.values.slice(1);
    const obj = data.map(arr => Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] }))));
    setGSheetData(obj)
  }

  // getData()

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/placeholder.jpg')}
      />
      <TopBar />
      <ScrollView style={styles.scrollContainer}>
        <Button
          onPress={getData}
        >

        </Button>
        <FlatList
          data={gSheetData}
          renderItem={({ item }) =>
            <TeacherDescription
              name={item.name}
              source={require('../assets/TeacherHeadshots/Hashizume-E.jpg')}
              description={item.description}
            />}
        />


        <TeacherDescription
          name='Mr.Hashizume'
          source={require('../assets/TeacherHeadshots/Hashizume-E.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mrs. Hashizume"
          source={require('../assets/TeacherHeadshots/Hashizume-L.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Ishikawa"
          source={require('../assets/TeacherHeadshots/Ishikawa.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Komar"
          source={require('../assets/TeacherHeadshots/Komar.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Ms. Kramer"
          source={require('../assets/TeacherHeadshots/Kramer.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Makekau"
          source={require('../assets/TeacherHeadshots/Makekau.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Mitsuda"
          source={require('../assets/TeacherHeadshots/Mitsuda.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Murray"
          source={require('../assets/TeacherHeadshots/Murray.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Nishimura"
          source={require('../assets/TeacherHeadshots/Nishimura.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Park"
          source={require('../assets/TeacherHeadshots/Park.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Ms. Perkins"
          source={require('../assets/TeacherHeadshots/Perkins.jpg')}
          description='description'
        />
        <TeacherDescription
          name="Mr. Takahashi"
          source={require('../assets/TeacherHeadshots/Takahashi.jpg')}
          description='description'
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    alignSelf: 'center',
    opacity: '78%',
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