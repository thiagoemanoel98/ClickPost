import React from 'react';
import {View, Text} from 'react-native';

import {Container, Title, TitleText} from './styles';

function Header() {
  return (
    <Container>
      <Title>
        <TitleText>Click<Text style={{color: 'rgba(51, 176, 246, 1)'}}>Posts</Text></TitleText>
      </Title>
    </Container>
  );
}

export default Header;
