import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Pagina3 = ({navigation, route}) => {
  
  const [loading, setLoading] = useState(true);
  const [scanData, setScanData]= useState("");
  const [permission, setPermission] = useState(true); 

  useEffect( ()=>{
      requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const {status, granted} = await BarCodeScanner.requestPermissionsAsync();
      console.log(`Status: ${status}, granted: ${granted}`)

      if (status ==='granted')
      {
          console.log('access granted');
          setPermission(true);
      } else {
          setPermission(false);
      }
      
    } catch (error) {
        console.log(error);
        setPermission(false);
      
    } finally {
      setLoading(false)
    }

  };

  if(loading)
      return (
          <View style={styles.container}>
              <Text>requesting permision...</Text>
          </View>
      );

  if (scanData) {
      Alert.alert('ScanData ok');  
      return (
          <View style={styles.container}>
              <Text>{scanData}</Text>
              <Button title="ScanAgain" onPress={ () => setScanData(undefined)}></Button>
          </View>
      )};

  if (permission) {
      Alert.alert('Permission ok');
      return (
          <BarCodeScanner
              style={[styles.container]}
              onBarCodeScanned={({ type, data }) => {
                  try {
                      console.log("Tipo dato: " + type);
                      console.log("Dato: " + data);
                      // let _data = JSON.parse(data);
                      let _data = data;
                      setScanData(_data);
                  } catch (error) {
                      console.error('Unable to parse string: ', error);
                  }
              }}
            >
                <Text style={styles.text}>Scan the QR code.</Text>
            </BarCodeScanner>
          );
    } else {
        return <Text style={styles.textError}>Permission rejected.</Text>;
    }
};

export default Pagina3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      backgroundColor: 'black',
      color: 'white',
    }
  });
