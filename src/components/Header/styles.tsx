import styled from 'styled-components/native';

// Header fica perto da status bar, evitar que atravesse a statusbar do iphone
export const Container = styled.SafeAreaView`
  width: 100%;
  background-color: #000;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #c7c7c7;
`;

export const Title = styled.Text`
  font-size: 27px;
  font-weight: bold;
  padding-bottom: 15px;
  color: #000;
`;

export const TitleText = styled.Text`
  color: #FFF;
`;