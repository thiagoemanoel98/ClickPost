import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 8px;
  //background-color: #FFF;
  border-radius: 8px;
  
  padding: 11px;
`;

export const HeaderDeatils = styled.View`
  margin-top: 5px;
  margin-bottom: 12px;
  justify-content: flex-start;
  align-items: center; 
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: rgba(51, 176, 246, 1);
`;

export const UserName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  font-style: italic;
`;

export const SectionArea = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #E5E5E5;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 5px;

`;

export const SectionTitle = styled.Text`
  font-weight: bold;
  color: rgba(51, 176, 246, 1);
  font-size: 20px;
`;

export const Content = styled.View`
  padding-top: 12px;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextLabel = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const TextContent = styled.Text`
  font-size: 17px;
`;
