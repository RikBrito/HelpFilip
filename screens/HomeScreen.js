import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import {Button, Card} from 'native-base';
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';
import firebase from 'react-native-firebase';
import { postLogin } from '../../services/auth';
import InputDialog from '../../components/InputDialog';
import alert from react;

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-left: 65%;
  width: 70%;
  height: 400px;
  elevation: 20;      
`
export default function HomeScreen() {
  return (

    <View 
    style={styles.container}>
    <ImageBackground source={require("../assets/images/backgound.png")}
    style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <StyledCard

          >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/dog.png')
                : require('../assets/images/icon.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>My Pet</Text>
        </View>

        <View> 
         <Input
            placeholder='Digite seu e-mail'
            leftIcon={
              <Icon
              name='user'
              size={24}
              color='black'
              />
              }
          />

          <Input
            placeholder='Digite sua Senha'
            leftIcon={{ type: 'password', name: 'lock' }}
          />
        </View>

      <View style={styles.helpContainer}>

        //botão login
        <Button
        style={{ marginLeft: 80, marginRight: 90, marginBottom:5 }}
        backgroundColor="#fff"
        onPress={() => { onSignIn(); }}
        >
          <Text
          style={{marginLeft: 30}}
          >Login</Text>

        //botão Cadastrar
        </Button>
          <Button
          style={{ marginLeft: 80, marginRight: 90, marginBottom:5 }}
          backgroundColor="#fff"
          onPress={() => {onSignIn()}}>
          <Text
          style={{marginLeft: 20}}
          >Cadastrar</Text>
        </Button>
        <Button
        style={{ marginLeft: 80, marginRight: 90 }}
        backgroundColor="#fff"
        onPress={() => {
        onSignIn();
        }}
        >
          <Text
          style={{marginLeft: 20}}
          >Recuperar Senha</Text>
        </Button>
        </View>
        </StyledCard>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            Ajuda e Suporte
          </MonoText>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function onSignIn() {
  const { navigation } = this.props;
    const { email, password } = this.state;
    try {
     
      await AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.pop();
    } catch (err) {
      /* TODO: Error Dialog */
      alert('Login incorreto');
    }
  };

  toggleForgetPasswordDialog = () => {
    this.setState(state => ({
      forgetPasswordDialog: !state.forgetPasswordDialog
    }));
  };

  sendConfirmationLinkToEmail = (email) => {
    console.log(email);
    /* TODO: Send link to email */

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:#0f0ff0,
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#000000',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#000',
  },
});
