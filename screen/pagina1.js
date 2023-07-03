import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Pagina1 = ({navigation}) => {
    return (
    <View>
        <Button
            style={styles.button}
            title="Vai a Pagina 2"
            onPress={() =>
            navigation.navigate('Pagina2', {name: 'Pagina 2'})
            }></Button>
        <Button 
            style={styles.button}
            title="Vai a Pagina 3"
            onPress={() =>
            navigation.navigate('Pagina3', {name: 'Pagina 3'})
            }>
        </Button>
    </View>
    );
  };

  export default Pagina1

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: 'red',
    }
})
