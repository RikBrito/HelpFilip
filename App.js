import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {MYPET as name} from './app.json';
import HomeScreen from '../HelpFilip-master/screens/HomeScreen';
import * as firebase from 'firebase';



export default function App(props) {

  Config = {
    apiKey: "AIzaSyASr0XuvRC2K_btO_MN7J9mBJiC386Ctao",
    authDomain: "my-dog-app-36889.firebaseapp.com",
    databaseURL: "https://my-dog-app-36889.firebaseio.com",
    projectId: "my-dog-app-36889",
    storageBucket: "my-dog-app-36889.appspot.com",
    messagingSenderId: "815535862651",
    appId: "1:815535862651:web:37df0b50722f0b4e0283de"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
  
  async componentDidMount(){
    firebase.initializeApp(config);
    this.auth = firebaseauth();
  };sss

  ppRegistry.registerComponent(name, () => HomeScreen );

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});