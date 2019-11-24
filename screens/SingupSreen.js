import { Input } from 'react-native-elements';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from './styles';

export default class screens extends Component {
  render(

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
    <Input
        placeholder='Confirme sua Senha'
        leftIcon={{ type: 'password', name: 'lock' }}
    />
     </View>
  )
}
