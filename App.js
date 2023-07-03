import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Pagina1 from './screen/pagina1';
import Pagina2 from './screen/pagina2';
import Pagina3 from './screen/pagina3';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Pagina1}
          options={{title: 'Pagina 1'}}
        />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="Pagina3" component={Pagina3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
