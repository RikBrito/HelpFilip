import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  component
} from 'react-native';
import {Button, Card} from 'native-base';
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';
import fire from '../App';
import alert from 'react';

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  margin-top: 100p%;
  margin-left: 65%;
  width: 70%;
  height: 400%;
  elevation: 20;      
`
this.state = ({
  email: null,
  password: null,
});

export default function HomeScreen() {

  this.state = {
    user: undefined
  }

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
            ref="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            leftIcon={
              <Icon
              name='email'
              size={24}
              color='black'
              />
              }
          />

          <Input
            placeholder='Digite sua Senha'
            ref="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
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

        //recuperar Senha
        <Button
        style={{ marginLeft: 80, marginRight: 90 }}
        backgroundColor="#fff"
        onPress={() => { toggleForgetPasswordDialog()}}
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


this.onSignIn = this.onSignIn.bind(this);
HomeScreen.navigationOptions = {
  header: null,
};

    function onSignIn() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    fire.auth().onAuthStateChanged((user) => {
      console.log(email);
      if (email) {
        this.setState({ user });
        localStorage.setItem('email', user.uid);
      } else {
        this.setState({ email: null });
        localStorage.removeItem('email');
      }
      // TODO: Error Dialog 
      alert('Login incorreto');
    })

  toggleForgetPasswordDialog = () => {
    this.setState(state => ({
      forgetPasswordDialog: !state.forgetPasswordDialog
    }))
  };

  sendConfirmationLinkToEmail = (email) => {
    console.log(email);
    /* TODO: Send link to email */
  };

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
  })
    }
}
