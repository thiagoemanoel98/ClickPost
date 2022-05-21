import styled from "styled-components/native";

export const ContainerPost = styled.View`
  margin: 8px 17px 2%;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(18, 18, 18, 1);
  padding: 11px;
`;

export const HeaderPost = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border-color: rgba(51, 176, 246, 1);
  border-width: 2px;
`;

export const ContainerNames =styled.View`
  
`;

export const TextName = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: bold;
  margin-left: 7px;
`;

export const TextUserName = styled.Text`
  margin-left: 7px;
  font-size: 12px;
  font-style: italic;  
`;

export const ButtonPost = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`;

