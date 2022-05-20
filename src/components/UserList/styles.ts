import styled from "styled-components/native";

export const ContainerPost = styled.View`
  margin-top: 8px;
  margin: 8px 2%;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(18, 18, 18, 1);
  padding: 11px;
  
`;

export const HeaderPost = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: rgba(51, 176, 246, 1);
  border-width: 2px;
`;


export const TextName = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 17px;
  font-weight: bold;
  margin-left: 7px;
`;

export const TitlePost = styled.Text`
  color: #9E9E9E;
  font-size: 20px;
  
  margin-right: 18px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const TouchPost = styled.TouchableOpacity`
`;

export const ButtonPost = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
