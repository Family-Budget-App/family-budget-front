
import {StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native'

export default function Navbar(){
    return(
        <View style={styles.container}>
            <View style={styles.navButton}>
                <Text>Main Page</Text>
            </View>
            <View style={styles.navButton}>
                <Text>Stats</Text>
            </View>
            <View style={styles.navButton}>
                <Text>Paycheck</Text>
            </View>
            <View style={styles.navButton}>
                <Text>Options</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: "row",
    },

    navButton:{
        backgroundColor:"skyblue",
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').height / 10,
        borderColor: "black",
        borderWidth: 3,
        borderCurve: "circular",
        borderRadius: 20,
        textAlign: "center",
    }
    
});