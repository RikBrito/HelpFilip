import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
<<<<<<< HEAD


const [isLoadingComplete, setLoadingComplete] = useState(false);
=======
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
>>>>>>> 40ad08bf7ad5c8a0e67738f708e6276b0699d532

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
<<<<<<< HEAD


async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}
=======
>>>>>>> 40ad08bf7ad5c8a0e67738f708e6276b0699d532

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});