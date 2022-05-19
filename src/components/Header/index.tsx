import React from 'react';
import {View, Text} from 'react-native';

import {Container, Title} from './styles';

function Header() {
  return (
    <Container>
      <Title>
        Click<Text style={{color: 'rgba(51, 176, 246, 1)'}}>Posts</Text>
      </Title>
    </Container>
  );
}

export default Header;
