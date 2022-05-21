import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const HeaderPage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const PageTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export const PageTitle2 = styled.Text`
  color: rgba(51, 176, 246, 1);
  font-weight: bold;
  font-size: 20px;
`;

export const AreaTitle = styled.View`
  margin: 8px 2%;
  background-color: #fff;
  border-radius: 8px;
`;

export const LabelTitle = styled.Text`
  margin-top: 12px;
  margin-left: 8px;
  color: #000;
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
`;

export const AreaBody = styled.View`
  margin-top: 12px;
  margin: 8px 2%;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 30px;

  height: 40%;
`;

export const InputTitle = styled.TextInput`
  background-color: transparent;
  margin: 10px;
  color: #000;
  font-size: 20px;
`;

export const InputBody = styled.TextInput`
  background-color: transparent;
  margin: 10px;
  color: #000;
  font-size: 20px;
  text-align: justify;
`;

export const ActionsArea = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextConfirm = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;