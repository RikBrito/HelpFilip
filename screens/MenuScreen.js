import {Image, Button, Container } from 'native-base';

import React, { Component } from 'react';




export default class screens extends Component {
  render() {
    return (
    <Container>
        <Image src='../assets/images/pesquisar.png'></Image>
        <Button class="btn">Pesquisar</Button>
    
        <Image src='../assets/images/alterar.png'></Image>
        <Button class="btn">Alterar</Button>

    
        <Image src='../assets/images/ar.png'></Image>
        <Button class="btn">Pesquisar</Button>
    
</Container>
    )
  }
}
