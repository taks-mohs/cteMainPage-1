import { StyleSheet, Text, Pressable, View, useWindowDimensions, FlatList, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../colors'
import { useEffect, useState } from 'react'
import Event from '../../modules/google/events'
import EventCard from '../Event'

export default function EventChunk() {
   const { width } = useWindowDimensions()
   const [events, setEvents] = useState<Event[]>([]);
   //console.log(events.length)
   useEffect(() => {
      Event.getEvents()
         .then(setEvents)
         .catch(console.error);

   }, []);
   useFonts({
      'oswaldlight': Oswald_300Light,
      'oswaldmedium': Oswald_500Medium,
      'oswaldsemibold': Oswald_600SemiBold
   })
   const styles = StyleSheet.create({
      container: {
         marginHorizontal: width * 0.1,
         marginTop: 100,
         padding: width * 0.02,
         backgroundColor: Colors.primary,
         alignItems: 'center'
      },
      header: {
         fontSize: width * 0.05,
         color: Colors.secondary,
         fontFamily: 'oswaldmedium',
         marginBottom: width * 0.02
      },
      button: {
         fontSize: width * 0.025,
         padding: width * 0.01,
         color: Colors.primary,
         backgroundColor: Colors.secondary,
         fontFamily: 'oswaldsemibold'
      },
      scroll: {
         overflow: 'hidden',
         width: "100%"
      }
   })


   return (
      <View style={styles.container}>
         <Text style={styles.header}>Events</Text>
         <ScrollView style={styles.scroll} horizontal={true}>
            {events.map((event) => {
               if (event.isOld()) {
                  return;
               } else {
                  return <EventCard event={event} />;
               }
            })}
         </ScrollView>
      </View>
   )
}

