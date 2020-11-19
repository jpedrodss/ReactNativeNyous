import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Autenticado = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Eventos" component={Eventos} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  )
}

const Logout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Deseja realmente sair da aplicação?</Text>
      <TouchableOpacity onPress={() => {
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login');
      }} style={styles.button}>
        <Text style={{color: 'white'}}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3b3b3b',
    width: '50%',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
}
});

