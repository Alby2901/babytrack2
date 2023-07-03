import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { IQRCodeProps } from "./library/IQRCodeProps";
import QRCode from 'react-native-qrcode-svg';


const Pagina2 = ({navigation, route}) => {

    const barcodeValue ="Paperino"
    const barcodeValueJS = {nome: 'Alberto', numero:'123'};

    const barcodeValJSON = 
    {"Dati":[
      {"nome": "Alberto", "numero":"123"},
      {"nome": "Cristina", "numero":"456"},
      {"nome": "Giovanni", "numero":"789"}
            ]};
    
    console.log('1: ' + typeof(barcodeValJSON));
    console.log('2: ' + typeof(barcodeValueJS));
    console.log('3: ' + JSON.stringify(barcodeValueJS));

    // const BarcodeOBJ = JSON.parse(barcodeValJSON);
    //console.log('Stringify: ' + JSON.stringify(barcodeValueJS));
    //console.log('Parse: ' + JSON.parse(barcodeValJSON).toString());

    return (
    <View style={styles.container}>
        <QRCode value={JSON.stringify(barcodeValueJS)}></QRCode>
        <View>
            <Button title="Vai alla scansione"
              onPress={() =>
              navigation.navigate('Pagina3', {name: 'Pagina 3'})
              }></Button>
        </View>
    </View>
    )
  };

export default Pagina2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  }
}
    
)
