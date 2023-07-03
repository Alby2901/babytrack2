import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';

export default function App() {
  const [loading,setLoading] = useState(true);
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

  if (scanData) 
      return (
          <View style={styles.container}>
              <Text>{scanData}</Text>
              <button title="ScanAgain" 
                      onProgress={ () => setScanData(undefined)}></button>
          </View>
      );
  if (permission)
      return 
        <BarCodeScanner style={styles.container} 
                        onBarCodeScanned={({type, data}) => {
                          try {
                            console.log(type);
                            console.log(data);
                            let _data = JSON.parse(data);
                            setScanData(_data);
                          } catch (error) {
                            console.log('Unable to parse: ', error);
                          }
                        }}
          >
            <Text>Scan the QR code</Text>  
        </BarCodeScanner>


   
  return (
    <View style={styles.container}>
      <Text style={[styles.testo1, styles.qrcode]}>Open up App.js to start working on your app!</Text>
      <QRCode value='Pippo' style={styles.qrcode}></QRCode>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  testo1: {
      color: 'red',
  },

  qrcode: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10, 
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'red',
    borderBottomWidth: 2,
    borderStyle: 'solid'
  },

  text: {
    backgroundColor: 'black',
    color: 'white',
  },
});
