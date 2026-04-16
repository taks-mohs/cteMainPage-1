import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import Colors from './colors';

export default function TeacherDescription(props) {
    const { width, height } = useWindowDimensions();

    const styles = StyleSheet.create({
    container: {
        height: height * 0.3,
        flexDirection: 'row',
        borderColor: Colors.secondary,
        backgroundColor: Colors.secondary,
        marginVertical: 30,
        marginHorizontal: 15,
        borderRadius: 30,
    },
    image: {
        flex: 1,
        borderRadius: 30,
    },
    imageView: {
        height: '100%',
        width: '100%',
        flex: '15%',
    },
    teacherHeaderText: {
        fontWeight: 'bold',
        fontSize: 40,
        padding: 10,
        color: 'white',
        fontFamily: 'oswaldmedium'
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 25,
        paddingRight: 10,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'oswaldmedium'
    },
    textView: {
        flex: '85%',
        flexDirection: 'column',
    },
})
    return(
        <View style = {styles.container}>
            <View style = {styles.imageView}>
                <Image
                    style = {styles.image}
                    source = {props.source}
                />
            </View>
            <View style = {styles.textView}>
                <Text style = {styles.teacherHeaderText}>{props.name}</Text>
                <Text style = {styles.descriptionText}>{props.description}</Text>
            </View>
        </View>
    )
    
}

